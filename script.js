
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, Flip)

  const lightColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--light")
    .trim()
  const darkColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--dark")
    .trim()

  function interpolateColor(color1, color2, factor) {
    return gsap.utils.interpolate(color1, color2, factor)
  }
  })
