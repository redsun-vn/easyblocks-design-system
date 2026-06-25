import React, { useMemo } from "react";
import { useCombobox, useMultipleSelection } from "downshift";
import * as PopperPrimitive from "@radix-ui/react-popper";
import { Icons } from "../icons";
import { Shell, ValueArea, InputEl, EndAdornments, IconButton } from "./styles";
import { AutocompleteChip } from "./autocomplete-chip";
import { AutocompleteListbox } from "./autocomplete-listbox";
import {
  defaultGetOptionLabel,
  getFilteredOptions,
  makeOptionEquals,
} from "./use-default-filter";
import { useControllableState } from "./use-controllable-state";
import type { AutocompleteProps } from "./types";

export type MultipleAutocompleteProps<T> = AutocompleteProps<T> & {
  forwardedRef?: React.Ref<HTMLInputElement>;
};

/**
 * Multiple-select Autocomplete. Composes Downshift `useMultipleSelection`
 * (selected array, chip nav, Backspace-removes-last) with `useCombobox`
 * (filter/highlight/open). Selected values render as removable chips and are
 * excluded from the dropdown. freeSolo adds the typed string as a chip.
 */
export function MultipleAutocomplete<T>(props: MultipleAutocompleteProps<T>) {
  const {
    options,
    freeSolo = false,
    loading = false,
    value,
    defaultValue,
    onChange,
    inputValue: inputValueProp,
    onInputChange,
    getOptionLabel = defaultGetOptionLabel,
    isOptionEqualToValue,
    filterOptions,
    renderOption,
    renderInput,
    disabled = false,
    placeholder,
    limitTags,
    loadingText,
    noOptionsText,
    className,
    id,
    forwardedRef,
  } = props;

  const isControlled = value !== undefined;

  const [inputValue, setInputValue] = useControllableState<string>({
    controlled: inputValueProp,
    defaultValue: "",
  });

  const multipleSelection = useMultipleSelection<T | string>({
    ...(isControlled
      ? { selectedItems: (value as (T | string)[]) ?? [] }
      : {
          initialSelectedItems:
            (defaultValue as (T | string)[] | undefined) ?? [],
        }),
    onStateChange: ({ selectedItems: next, type }) => {
      if (!next) return;
      const t = useMultipleSelection.stateChangeTypes;
      const isRemoval =
        type === t.SelectedItemKeyDownBackspace ||
        type === t.SelectedItemKeyDownDelete ||
        type === t.DropdownKeyDownBackspace ||
        type === t.FunctionRemoveSelectedItem;
      onChange?.(null, next, isRemoval ? "removeOption" : "selectOption");
    },
  });

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = multipleSelection;

  const optionEquals = makeOptionEquals<T>(
    getOptionLabel,
    isOptionEqualToValue,
  );
  const isSelected = (option: T | string) =>
    selectedItems.some((sel) => optionEquals(option, sel));

  const available = useMemo(
    () =>
      (
        getFilteredOptions({
          options,
          inputValue,
          getOptionLabel,
          filterOptions,
        }) as (T | string)[]
      ).filter((option) => !isSelected(option)),
    // isSelected depends on selectedItems; listed explicitly.
    [options, inputValue, getOptionLabel, filterOptions, selectedItems],
  );

  const combobox = useCombobox<T | string>({
    items: available,
    inputValue,
    selectedItem: null,
    itemToString: (item) => (item == null ? "" : getOptionLabel(item)),
    stateReducer: (state, { changes, type }) => {
      switch (type) {
        // Keep menu open and highlight stable after picking an item.
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true,
            highlightedIndex: state.highlightedIndex,
          };
        default:
          return changes;
      }
    },
    onStateChange: ({
      inputValue: newInput,
      type,
      selectedItem: newSelected,
    }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (newSelected != null) {
            addSelectedItem(newSelected);
            setInputValue("");
            onInputChange?.(null, "", "reset");
          }
          break;
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(newInput ?? "");
          onInputChange?.(null, newInput ?? "", "input");
          break;
        default:
          break;
      }
    },
  });

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getToggleButtonProps,
    getItemProps,
    highlightedIndex,
  } = combobox;

  const handleFreeSolo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && freeSolo && combobox.highlightedIndex < 0) {
      const text = inputValue.trim();
      if (text) {
        addSelectedItem(text);
        setInputValue("");
        onInputChange?.(event, "", "reset");
      }
    }
  };

  const dropdownProps = getDropdownProps({
    preventKeyAction: isOpen,
    ref: forwardedRef ?? undefined,
  });

  const inputProps = getInputProps({
    ...dropdownProps,
    disabled,
    id,
    placeholder: selectedItems.length === 0 ? placeholder : undefined,
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
      // Preserve useMultipleSelection's Backspace-removes-last, then freeSolo.
      (dropdownProps.onKeyDown as React.KeyboardEventHandler | undefined)?.(
        event,
      );
      handleFreeSolo(event);
    },
  });

  const collapse =
    typeof limitTags === "number" &&
    limitTags >= 0 &&
    limitTags < selectedItems.length;
  const visibleChips = collapse
    ? selectedItems.slice(0, limitTags)
    : selectedItems;
  const hiddenCount = selectedItems.length - visibleChips.length;

  return (
    <PopperPrimitive.Root>
      <PopperPrimitive.Anchor asChild>
        <Shell $disabled={disabled} className={className}>
          <ValueArea>
            {visibleChips.map((item, index) => (
              <AutocompleteChip
                key={`${getOptionLabel(item)}-${index}`}
                label={getOptionLabel(item)}
                disabled={disabled}
                selectedItemProps={getSelectedItemProps({
                  selectedItem: item,
                  index,
                })}
                onRemove={(event) => {
                  event.stopPropagation();
                  removeSelectedItem(item);
                }}
              />
            ))}
            {hiddenCount > 0 && <span>{`+${hiddenCount}`}</span>}
            {renderInput ? (
              renderInput({ inputProps, disabled, placeholder })
            ) : (
              <InputEl {...inputProps} />
            )}
          </ValueArea>
          <EndAdornments>
            <IconButton
              type="button"
              aria-label="Toggle options"
              {...getToggleButtonProps({ disabled })}
            >
              <Icons.ChevronDown size={16} />
            </IconButton>
          </EndAdornments>
        </Shell>
      </PopperPrimitive.Anchor>

      <AutocompleteListbox<T | string>
        isOpen={isOpen}
        items={available}
        highlightedIndex={highlightedIndex}
        getMenuProps={getMenuProps as never}
        getItemProps={getItemProps as never}
        getOptionLabel={getOptionLabel}
        renderOption={renderOption as never}
        loading={loading}
        loadingText={loadingText}
        noOptionsText={noOptionsText}
      />
    </PopperPrimitive.Root>
  );
}
