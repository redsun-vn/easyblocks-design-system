import { useCallback, useState } from "react";

/**
 * Minimal controlled/uncontrolled state helper (MUI/Radix pattern).
 *
 * When `controlled` is defined the value is owned by the parent and local
 * updates are no-ops (the parent must re-render with a new value). Otherwise the
 * hook owns the state internally, seeded from `defaultValue`.
 */
export function useControllableState<V>(params: {
  controlled: V | undefined;
  defaultValue: V;
}): [V, (next: V) => void, boolean] {
  const { controlled, defaultValue } = params;
  const isControlled = controlled !== undefined;
  const [internal, setInternal] = useState<V>(defaultValue);

  const set = useCallback(
    (next: V) => {
      if (!isControlled) setInternal(next);
    },
    [isControlled],
  );

  const value = isControlled ? (controlled as V) : internal;
  return [value, set, isControlled];
}
