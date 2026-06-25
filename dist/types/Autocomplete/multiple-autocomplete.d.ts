import React from "react";
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
export declare function MultipleAutocomplete<T>(props: MultipleAutocompleteProps<T>): React.JSX.Element;
//# sourceMappingURL=multiple-autocomplete.d.ts.map