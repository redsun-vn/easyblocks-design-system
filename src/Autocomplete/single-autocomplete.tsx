import React, { useMemo, useRef } from "react";
import { useCombobox } from "downshift";
import * as PopperPrimitive from "@radix-ui/react-popper";
import { Icons } from "../icons";
import { Shell, ValueArea, InputEl, EndAdornments, IconButton } from "./styles";
import { AutocompleteListbox } from "./autocomplete-listbox";
import {
  defaultGetOptionLabel,
  getFilteredOptions,
  makeOptionEquals,
} from "./use-default-filter";
import { useControllableState } from "./use-controllable-state";
import type { AutocompleteProps } from "./types";

export type SingleAutocompleteProps<T> = AutocompleteProps<T> & {
  forwardedRef?: React.Ref<HTMLInputElement>;
};

/**
 * Single-select Autocomplete. Downshift `useCombobox` owns open state, highlight,
 * ARIA and keyboard; this component owns the controlled/uncontrolled value + input
 * text and the freeSolo commit (Enter / blur with no highlighted option).
 *
 * `selectedItem` may be a `string` in freeSolo mode (arbitrary typed text), hence
 * the `T | string` item type throughout.
 */
export function SingleAutocomplete<T>(props: SingleAutocompleteProps<T>) {
  const {
    options,
    freeSolo = false,
    loading = false,
    value,
    defaultValue = null,
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
    disableClearable = false,
    loadingText,
    noOptionsText,
    className,
    id,
    forwardedRef,
  } = props;

  const [selectedItem, setSelectedItem] = useControllableState<
    T | string | null
  >({
    controlled: value as T | string | null | undefined,
    defaultValue: (defaultValue as T | string | null) ?? null,
  });

  const [inputValue, setInputValue] = useControllableState<string>({
    controlled: inputValueProp,
    defaultValue: selectedItem != null ? getOptionLabel(selectedItem) : "",
  });

  // Guards against freeSolo committing the same text twice (Enter, then blur).
  // selectedItem is unreliable for this in controlled mode (setSelectedItem is a
  // no-op until the parent folds the value back), so track the raw committed text.
  const lastCommittedRef = useRef<string | null>(null);

  const filtered = useMemo(
    () =>
      getFilteredOptions({
        options,
        inputValue,
        getOptionLabel,
        filterOptions,
      }) as (T | string)[],
    [options, inputValue, getOptionLabel, filterOptions],
  );

  const combobox = useCombobox<T | string>({
    items: filtered,
    inputValue,
    selectedItem,
    itemToString: (item) => (item == null ? "" : getOptionLabel(item)),
    onInputValueChange: ({ inputValue: next, type }) => {
      const v = next ?? "";
      setInputValue(v);
      const isUserTyping = type === useCombobox.stateChangeTypes.InputChange;
      // Re-enable freeSolo commit once the user edits the text again.
      if (isUserTyping) lastCommittedRef.current = null;
      onInputChange?.(null, v, isUserTyping ? "input" : "reset");
    },
    onSelectedItemChange: ({ selectedItem: next }) => {
      const resolved = next ?? null;
      setSelectedItem(resolved);
      if (resolved != null) setInputValue(getOptionLabel(resolved));
      onChange?.(null, resolved, "selectOption");
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

  const commitFreeSolo = (event: React.SyntheticEvent, text: string) => {
    if (lastCommittedRef.current === text) return;
    lastCommittedRef.current = text;
    setSelectedItem(text);
    setInputValue(text);
    onChange?.(event, text, "createOption");
  };

  const handleClear = (event: React.MouseEvent) => {
    lastCommittedRef.current = null;
    setSelectedItem(null);
    setInputValue("");
    onChange?.(event, null, "clear");
    onInputChange?.(event, "", "clear");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // freeSolo commit only when no option is highlighted (else Downshift selects it).
    if (event.key === "Enter" && freeSolo && combobox.highlightedIndex < 0) {
      const text = inputValue.trim();
      if (text) commitFreeSolo(event, text);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!freeSolo) return;
    const text = inputValue.trim();
    if (text) commitFreeSolo(event, text);
  };

  const optionEquals = makeOptionEquals<T>(
    getOptionLabel,
    isOptionEqualToValue,
  );
  const isItemSelected = (item: T | string) =>
    selectedItem != null && optionEquals(item, selectedItem);

  const showClear =
    !disableClearable &&
    !disabled &&
    (inputValue.length > 0 || selectedItem != null);

  const inputProps = getInputProps({
    ref: forwardedRef ?? undefined,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    disabled,
    placeholder,
    id,
  });

  return (
    <PopperPrimitive.Root>
      <PopperPrimitive.Anchor asChild>
        <Shell $disabled={disabled} className={className}>
          <ValueArea>
            {renderInput ? (
              renderInput({ inputProps, disabled, placeholder })
            ) : (
              <InputEl {...inputProps} />
            )}
          </ValueArea>
          <EndAdornments>
            {showClear && (
              <IconButton
                type="button"
                aria-label="Clear"
                disabled={disabled}
                onClick={handleClear}
              >
                <Icons.Close size={14} />
              </IconButton>
            )}
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
        items={filtered}
        highlightedIndex={highlightedIndex}
        getMenuProps={getMenuProps as never}
        getItemProps={getItemProps as never}
        getOptionLabel={getOptionLabel}
        isItemSelected={isItemSelected}
        renderOption={renderOption as never}
        loading={loading}
        loadingText={loadingText}
        noOptionsText={noOptionsText}
      />
    </PopperPrimitive.Root>
  );
}
