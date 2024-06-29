// Scroll to the destination
export function onScroll(destination: string): void {
  const destinationElement = document.getElementById(destination)
  if (destinationElement)
    destinationElement.scrollIntoView({
      behavior: 'smooth'
    })
}
