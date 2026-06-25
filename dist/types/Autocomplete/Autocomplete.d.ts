import React from "react";
import type { AutocompleteProps } from "./types";
/**
 * `forwardRef` + generics can't be expressed directly, so we cast the wrapped
 * component back to a generic callable (same approach MUI uses). The forwarded
 * ref targets the underlying `<input>`.
 */
export declare const Autocomplete: <T>(props: AutocompleteProps<T> & {
    ref?: React.Ref<HTMLInputElement>;
}) => React.ReactElement;
export type { AutocompleteProps, AutocompleteChangeReason, AutocompleteInputChangeReason, AutocompleteValue, AutocompleteRenderOptionState, AutocompleteRenderInputParams, } from "./types";
//# sourceMappingURL=Autocomplete.d.ts.map