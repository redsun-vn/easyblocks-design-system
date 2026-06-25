import type React from "react";
/**
 * Public types for the Autocomplete component. MUI-aligned naming so existing
 * MUI consumers can migrate with minimal changes, while staying generic over the
 * option shape `T` (string options or arbitrary objects via `getOptionLabel`).
 */
/** Why the selected value changed — mirrors MUI's `onChange` reason argument. */
export type AutocompleteChangeReason = "selectOption" | "createOption" | "removeOption" | "clear" | "blur";
/** Why the text input value changed. */
export type AutocompleteInputChangeReason = "input" | "reset" | "clear";
/**
 * Resolved value shape. Single mode → `T | string | null`; multiple mode → array.
 * `string` members appear only in freeSolo mode (arbitrary typed entries).
 */
export type AutocompleteValue<T> = T | string | null | (T | string)[];
/** State passed to a custom `renderOption` renderer. */
export interface AutocompleteRenderOptionState {
    selected: boolean;
    highlighted: boolean;
    index: number;
}
/** Params handed to the optional `renderInput` escape hatch. */
export interface AutocompleteRenderInputParams {
    /** Spread onto the underlying `<input>` (includes Downshift combobox props). */
    inputProps: React.InputHTMLAttributes<HTMLInputElement> & {
        ref?: React.Ref<HTMLInputElement>;
    };
    disabled?: boolean;
    placeholder?: string;
}
export interface AutocompleteProps<T> {
    /** Available options to filter and select from. */
    options: T[];
    /** Allow selecting multiple values, rendered as removable chips. */
    multiple?: boolean;
    /** Allow committing arbitrary typed text that is not in `options`. */
    freeSolo?: boolean;
    /** Show a loading row inside the listbox (async option fetching). */
    loading?: boolean;
    /** Controlled selected value. */
    value?: AutocompleteValue<T>;
    /** Initial value for uncontrolled usage. */
    defaultValue?: AutocompleteValue<T>;
    /**
     * Fired when the selected value changes. `event` is `null` for option
     * selection driven by Downshift (it does not surface the source DOM event in
     * its change callbacks); the real event is provided for `clear` and freeSolo
     * `createOption` paths.
     */
    onChange?: (event: React.SyntheticEvent | null, value: AutocompleteValue<T>, reason: AutocompleteChangeReason) => void;
    /** Controlled text input value. */
    inputValue?: string;
    /** Fired when the text input value changes. */
    onInputChange?: (event: React.SyntheticEvent | null, value: string, reason: AutocompleteInputChangeReason) => void;
    /** Resolve an option (or freeSolo string) to its display label. */
    getOptionLabel?: (option: T | string) => string;
    /** Compare an option against a selected value for equality. */
    isOptionEqualToValue?: (option: T, value: T) => boolean;
    /** Override the default case-insensitive "contains" filter. */
    filterOptions?: (options: T[], state: {
        inputValue: string;
        getOptionLabel: (option: T | string) => string;
    }) => T[];
    /** Custom per-option renderer. */
    renderOption?: (option: T, state: AutocompleteRenderOptionState) => React.ReactNode;
    /** Optional override of the default internal input shell. */
    renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
    disabled?: boolean;
    placeholder?: string;
    /** Hide the clear (×) button. */
    disableClearable?: boolean;
    /** Content of the listbox loading row. Default: "Loading…". */
    loadingText?: React.ReactNode;
    /** Content of the listbox empty row. Default: "No options". */
    noOptionsText?: React.ReactNode;
    /** Multiple mode: max chips to show before collapsing into "+N". */
    limitTags?: number;
    className?: string;
    id?: string;
    "aria-label"?: string;
}
//# sourceMappingURL=types.d.ts.map