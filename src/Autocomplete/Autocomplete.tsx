import React, { forwardRef } from "react";
import { SingleAutocomplete } from "./single-autocomplete";
import { MultipleAutocomplete } from "./multiple-autocomplete";
import type { AutocompleteProps } from "./types";

/**
 * MUI-like Autocomplete. Headless interaction via Downshift, positioning via
 * Radix Popper, styling via styled-components.
 *
 * Routes to a dedicated single- or multiple-select implementation based on the
 * `multiple` prop so each path can call its own Downshift hooks unconditionally
 * (rules-of-hooks) and stay under the repo's file-size cap.
 */
function AutocompleteInner<T>(
  props: AutocompleteProps<T>,
  ref: React.Ref<HTMLInputElement>,
) {
  if (props.multiple) {
    return <MultipleAutocomplete<T> {...props} forwardedRef={ref} />;
  }
  return <SingleAutocomplete<T> {...props} forwardedRef={ref} />;
}

/**
 * `forwardRef` + generics can't be expressed directly, so we cast the wrapped
 * component back to a generic callable (same approach MUI uses). The forwarded
 * ref targets the underlying `<input>`.
 */
export const Autocomplete = forwardRef(AutocompleteInner) as <T>(
  props: AutocompleteProps<T> & { ref?: React.Ref<HTMLInputElement> },
) => React.ReactElement;

export type {
  AutocompleteProps,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  AutocompleteValue,
  AutocompleteRenderOptionState,
  AutocompleteRenderInputParams,
} from "./types";
