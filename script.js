import { animate, hover, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"


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

const headingNameElement = document.querySelector("#heading-name");
const text = headingNameElement.dataset.text;

headingNameElement.innerHTML = "";
text.split("").forEach((char, i) => {
	const p = document.createElement("p")
	p.textContent = char === " " ? "\u00A0" : char;
	p.style.opacity = "0";
	p.style.transform = "translateX(-30px)";
	headingNameElement.appendChild(p);
})

inView(headingNameElement, () => {
  headingNameElement.querySelectorAll("p").forEach((p, i) => {
    animate(p, 
      { opacity: 1, x: 0 },
      { duration: 0.5, delay: i * 0.1 }
    )
  })
}, { once: true });