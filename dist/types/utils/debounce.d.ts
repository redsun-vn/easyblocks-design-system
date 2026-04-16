type DebouncedFunction<T extends (...args: any[]) => any> = {
    (...args: Parameters<T>): void;
    cancel: () => void;
};
/**
 * Creates a debounced version of the given function that delays invocation
 * until `delay` ms have elapsed since the last call. Supports `.cancel()`.
 */
export default function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): DebouncedFunction<T>;
export {};
//# sourceMappingURL=debounce.d.ts.map