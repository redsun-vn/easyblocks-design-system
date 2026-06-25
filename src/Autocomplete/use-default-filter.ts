import type { AutocompleteProps } from "./types";

/**
 * Default label resolver: identity for strings, `String()` fallback otherwise.
 * Object options should supply their own `getOptionLabel`.
 */
export function defaultGetOptionLabel<T>(option: T | string): string {
  if (typeof option === "string") return option;
  if (option == null) return "";
  return String(option);
}

/**
 * Build an option-equality predicate used for selected-styling and multiple-mode
 * dedupe. Precedence: reference equality → caller's `isOptionEqualToValue` →
 * label-based fallback for object options (handles the common case where a
 * controlled `value` object has a different identity than the matching option).
 * Two strings only match by reference (covers freeSolo entries).
 */
export function makeOptionEquals<T>(
  getOptionLabel: (option: T | string) => string,
  isOptionEqualToValue?: (a: T, b: T) => boolean,
) {
  return (a: T | string, b: T | string): boolean => {
    if (a === b) return true;
    if (typeof a === "string" || typeof b === "string") return false;
    if (isOptionEqualToValue) return isOptionEqualToValue(a as T, b as T);
    return getOptionLabel(a) === getOptionLabel(b);
  };
}

/**
 * Resolve the visible options for a given input value, honoring a caller-provided
 * `filterOptions` when present and otherwise applying a case-insensitive
 * "contains" match over each option's label.
 *
 * Async callers typically pass `filterOptions={(options) => options}` to disable
 * client-side filtering and rely on server-side results.
 */
export function getFilteredOptions<T>(params: {
  options: T[];
  inputValue: string;
  getOptionLabel: (option: T | string) => string;
  filterOptions?: AutocompleteProps<T>["filterOptions"];
}): T[] {
  const { options, inputValue, getOptionLabel, filterOptions } = params;

  if (filterOptions) {
    return filterOptions(options, { inputValue, getOptionLabel });
  }

  const query = inputValue.trim().toLowerCase();
  if (!query) return options;

  return options.filter((option) =>
    getOptionLabel(option).toLowerCase().includes(query),
  );
}
