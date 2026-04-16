type DebouncedFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): void;
  cancel: () => void;
};

/**
 * Creates a debounced version of the given function that delays invocation
 * until `delay` ms have elapsed since the last call. Supports `.cancel()`.
 */
export default function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): DebouncedFunction<T> {
  let timerId: ReturnType<typeof setTimeout> | undefined;

  const debounced = (...args: Parameters<T>) => {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      timerId = undefined;
      fn(...args);
    }, delay);
  };

  debounced.cancel = () => {
    if (timerId !== undefined) {
      clearTimeout(timerId);
      timerId = undefined;
    }
  };

  return debounced;
}
