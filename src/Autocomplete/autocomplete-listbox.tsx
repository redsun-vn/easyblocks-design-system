import React from "react";
import * as PopperPrimitive from "@radix-ui/react-popper";
import { Portal } from "@radix-ui/react-portal";
import { Icons } from "../icons";
import { Listbox, OptionItem, StateRow } from "./styles";
import type { AutocompleteRenderOptionState } from "./types";

/**
 * Shared dropdown surface for single & multiple Autocomplete modes.
 *
 * Positioning only: rendered inside a `Radix Popper.Content` whose `Root`/`Anchor`
 * live in the parent (the input shell). Downshift remains the single source of
 * truth for open state, highlight, and ARIA — Popper just places the listbox.
 *
 * Downshift getter types are intentionally loose (`object`/`Record`) to avoid
 * threading Downshift's verbose generics through every call site.
 */
export interface AutocompleteListboxProps<T> {
  isOpen: boolean;
  items: T[];
  highlightedIndex: number;
  /** Downshift `getMenuProps`. */
  getMenuProps: (
    options?: object,
    extra?: { suppressRefError?: boolean },
  ) => Record<string, unknown>;
  /** Downshift `getItemProps`. */
  getItemProps: (options: {
    item: T;
    index: number;
  }) => Record<string, unknown>;
  getOptionLabel: (option: T | string) => string;
  /** Marks an item as already-selected (selected styling). */
  isItemSelected?: (item: T) => boolean;
  renderOption?: (
    option: T,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode;
  loading?: boolean;
  loadingText?: React.ReactNode;
  noOptionsText?: React.ReactNode;
  /** Gap between the trigger and the listbox. */
  sideOffset?: number;
}

export function AutocompleteListbox<T>(props: AutocompleteListboxProps<T>) {
  const {
    isOpen,
    items,
    highlightedIndex,
    getMenuProps,
    getItemProps,
    getOptionLabel,
    isItemSelected,
    renderOption,
    loading = false,
    loadingText = "Loading…",
    noOptionsText = "No options",
    sideOffset = 4,
  } = props;

  // Only mount when open so Popper/floating-ui doesn't recompute while hidden.
  // suppressRefError silences Downshift's mount-time ref check given the
  // conditional render (the ref still attaches on the open render).
  if (!isOpen) return null;

  const menuProps = getMenuProps({}, { suppressRefError: true });

  return (
    // Portal escapes ancestor overflow:hidden / transform clipping. Downshift
    // keeps focus on the input (not the listbox), so portalling is focus-safe;
    // Popper context propagates through the portal to position against the anchor.
    <Portal style={{ position: "absolute", zIndex: 100000 }}>
      <PopperPrimitive.Content
        side="bottom"
        align="start"
        sideOffset={sideOffset}
      >
        <Listbox {...menuProps}>
          {loading ? (
            <StateRow aria-disabled role="presentation">
              <Icons.LoadingSpinner size={16} />
              {loadingText}
            </StateRow>
          ) : items.length === 0 ? (
            <StateRow aria-disabled role="presentation">
              {noOptionsText}
            </StateRow>
          ) : (
            items.map((item, index) => {
              const selected = isItemSelected ? isItemSelected(item) : false;
              const highlighted = highlightedIndex === index;

              return (
                <OptionItem
                  key={`${getOptionLabel(item)}-${index}`}
                  $highlighted={highlighted}
                  $selected={selected}
                  {...getItemProps({ item, index })}
                >
                  {renderOption
                    ? renderOption(item, { selected, highlighted, index })
                    : getOptionLabel(item)}
                </OptionItem>
              );
            })
          )}
        </Listbox>
      </PopperPrimitive.Content>
    </Portal>
  );
}
