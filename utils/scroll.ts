export function disableScrolling() {
  // Get the current page scroll position
  document.body.style.overflow = "hidden"
}

export function enableScrolling(){
  document.body.style.overflow = "auto"
}