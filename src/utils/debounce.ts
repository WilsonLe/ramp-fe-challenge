/**
 * create a debounced version of a function
 * @param fn input function to create a debounced version of this function
 * @param delayMs number of seconds before running another fn()
 * @returns a debounced function that will be executed once when called
 * multiple times within the delay
 */
export const debouncify = (
  fn: (...args: any[]) => void,
  delayMs: number = 50
): ((...args: any[]) => void) => {
  let timeout: NodeJS.Timeout | null = null

  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => fn(...args), delayMs)
  }
}
