
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

  gsap.to(".marquee-images", {
    scrollTrigger: {
      trigger: ".marquee",
      start: "top bottom",
      end: "top top",
      scrub: true,
      onUpdate: self => {
        const xPosition = -75 + self.progress * 25
        gsap.set(".marquee-images", { x: `${xPosition}%` })
      },
    },
  })
  })
