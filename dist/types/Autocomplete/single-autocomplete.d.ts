import React from "react";
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
export declare function SingleAutocomplete<T>(props: SingleAutocompleteProps<T>): React.JSX.Element;
//# sourceMappingURL=single-autocomplete.d.ts.map