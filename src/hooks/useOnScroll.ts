/**
 * attach a custom callback when user scroll the app
 * @param callback function to execute when user scroll
 * @returns void
 */
export const useOnScroll = (callback: () => void) => {
  // Attach the scroll listener
  window.addEventListener("scroll", callback)

  // Clean up by removing the scroll listener when the component unmounts
  return () => {
    window.removeEventListener("scroll", callback)
  }
}
