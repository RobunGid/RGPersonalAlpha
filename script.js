import { animate, scroll, hover } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"


hover(".header--logo-container", (element) => {
    animate(element, { scale: 1.1, rotate: 7 }, { type: "spring" })

    return () => animate(element, { scale: 1, rotate: 0 }, { type: "spring" })
})

hover(".header--navbar-item", (element) => {
	animate(element, {scale: 1.05,}, { type: "spring"})
	return () => animate(element, { scale: 1}, { type: "spring" })
})