import React from "react";
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
    getMenuProps: (options?: object, extra?: {
        suppressRefError?: boolean;
    }) => Record<string, unknown>;
    /** Downshift `getItemProps`. */
    getItemProps: (options: {
        item: T;
        index: number;
    }) => Record<string, unknown>;
    getOptionLabel: (option: T | string) => string;
    /** Marks an item as already-selected (selected styling). */
    isItemSelected?: (item: T) => boolean;
    renderOption?: (option: T, state: AutocompleteRenderOptionState) => React.ReactNode;
    loading?: boolean;
    loadingText?: React.ReactNode;
    noOptionsText?: React.ReactNode;
    /** Gap between the trigger and the listbox. */
    sideOffset?: number;
}
export declare function AutocompleteListbox<T>(props: AutocompleteListboxProps<T>): React.JSX.Element | null;
//# sourceMappingURL=autocomplete-listbox.d.ts.map