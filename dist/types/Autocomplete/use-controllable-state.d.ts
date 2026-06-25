/**
 * Minimal controlled/uncontrolled state helper (MUI/Radix pattern).
 *
 * When `controlled` is defined the value is owned by the parent and local
 * updates are no-ops (the parent must re-render with a new value). Otherwise the
 * hook owns the state internally, seeded from `defaultValue`.
 */
export declare function useControllableState<V>(params: {
    controlled: V | undefined;
    defaultValue: V;
}): [V, (next: V) => void, boolean];
//# sourceMappingURL=use-controllable-state.d.ts.map