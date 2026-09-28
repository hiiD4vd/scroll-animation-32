
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

  let pinnedMarqueeImgClone = null
  let isImgCloneActive = false

  function createPinnedMarqueeImgClone() {
    if (isImgCloneActive) return

    const originalMarqueeImg = document.querySelector(".marquee-img.pin img")
    const rect = originalMarqueeImg.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    pinnedMarqueeImgClone = originalMarqueeImg.cloneNode(true)

    gsap.set(pinnedMarqueeImgClone, {
      position: "fixed",
      left: centerX - originalMarqueeImg.offsetWidth / 2,
      top: centerY - originalMarqueeImg.offsetHeight / 2,
      width: originalMarqueeImg.offsetWidth,
      height: originalMarqueeImg.offsetHeight,
      transform: "rotate(-5deg)",
      transformOrigin: "center center",
      pointerEvents: "none",
      willChange: "transform",
      zIndex: 100,
    })

    document.body.appendChild(pinnedMarqueeImgClone)
    gsap.set(originalMarqueeImg, { opacity: 0 })
    isImgCloneActive = true
  }

  function removePinnedMarqueeImgClone() {
    if (!isImgCloneActive) return
    if (pinnedMarqueeImgClone) {
      pinnedMarqueeImgClone.remove()
      pinnedMarqueeImgClone = null
    }
    const originalMarqueeImg = document.querySelector(".marquee-img.pin img")
    gsap.set(originalMarqueeImg, { opacity: 1 })
    isImgCloneActive = false
  }

  })
