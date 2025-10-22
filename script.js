import { animate, hover } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"


hover(".header--logo-container", (element) => {
    animate(element, { scale: 1.1, rotate: 7 }, { type: "spring" })

    return () => animate(element, { scale: 1, rotate: 0 }, { type: "spring" })
})

hover(".header--navbar-item", (element) => {
	animate(element, {scale: 1.05,}, { type: "spring"})
	return () => animate(element, { scale: 1}, { type: "spring" })
})

animate('.about-photo', { y: [0, -5, 0], rotate: [0, -2, 2, 0], scale: [1, 1.05, 0.95, 1] }, {
  duration: 3,
  easing: 'spring',
  stiffness: 300,
  damping: 10,
  repeat: Infinity
})