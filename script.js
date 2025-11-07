import { animate, hover, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

const VIEWPORT_OFFSET = 250;
const SCROLL_OFFSET = 30;

animate('.main--img', { y: [0, -5, 0], rotate: [0, -2, 2, 0], scale: [1, 1.05, 0.95, 1] }, {
  duration: 3,
  easing: 'spring',
  stiffness: 300,
  damping: 10,
  repeat: Infinity
});

hover(".header--logo-container", (element) => {
    animate(element, { scale: 1.1, rotate: 7 }, { type: "spring" });

    return () => animate(element, { scale: 1, rotate: 0 }, { type: "spring" });
});

hover(".stats--item", (element) => {
    animate(element.querySelectorAll(".stats--icon, .stats--title, .stats--subtitle"), { scale: 1.1, y: -5 }, { type: "spring" });

    return () => animate(element.querySelectorAll(".stats--icon, .stats--title, .stats--subtitle"), { scale: 1, y: 0 }, { type: "spring" });
});

hover(".about--item", (element) => {
    animate(element.querySelectorAll(".about--icon"), { scale: 1.1, y: -5, rotate: 7 }, { type: "spring" });

    return () => animate(element.querySelectorAll(".about--icon"), { scale: 1, y: 0, rotate: 0 }, { type: "spring" });
});

hover(".header--navbar-item", (element) => {
	animate(element, {scale: 1.05,}, { type: "spring"});
	return () => animate(element, { scale: 1}, { type: "spring" });
});

hover(".about--list-item", (element) => {
	animate(element, {scale: 1.03,}, { type: "spring"});
	animate(element.querySelector(".about--inline-icon"), {scale: 1.05,}, { type: "spring"});
	return () => {
		animate(element, { scale: 1}, { type: "spring" });
		animate(element.querySelector(".about--inline-icon"), {scale: 1,}, { type: "spring"});
};
});

hover(".projects--tech-item", (element) => {
	animate(element, {scale: 1.03,}, { type: "spring"});
	return () => {
		animate(element, { scale: 1}, { type: "spring" });
};
});

hover(".projects--image-container", (element) => {
	animate(element.querySelector(".projects--image"), {scale: 1.05,}, { type: "spring"});
	return () => {
		animate(element.querySelector(".projects--image"), { scale: 1}, { type: "spring" });
	};
});

hover(".projects--item", (element) => {
	animate(element, {scale: 1.05,}, { type: "spring"});
	return () => {
		animate(element, { scale: 1}, { type: "spring" });
	};
});

hover(".btn--down-arrow", (element) => {
	animate(element, {scale: 1.1,}, { type: "spring"});
	return () => {
		animate(element, { scale: 1}, { type: "spring" });
	};
});

animate('.about-photo', { y: [0, -5, 0], rotate: [0, -2, 2, 0], scale: [1, 1.05, 0.95, 1] }, {
  duration: 3,
  easing: 'spring',
  stiffness: 300,
  damping: 10,
  repeat: Infinity
});

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

const skillsDropdownButtons = document.querySelectorAll('.skills--btn-dropdown')

skillsDropdownButtons.forEach(button => {
	button.addEventListener("click", event => {
		event.currentTarget.classList.toggle('skills--btn-dropdown__flipped')
		event.currentTarget.parentNode.parentNode.nextElementSibling.nextElementSibling.classList.toggle("skills__hidden")
	})
})

hover(".skills--item", (element) => {
	animate(element, {scale: 1.03, y: -5});
	animate(element.querySelector('.skills--item-icon'), {scale: 1.1, rotate: 10, y: -5});
	return () => {
		animate(element, { scale: 1, y: 0});
		animate(element.querySelector('.skills--item-icon'), {scale: 1, rotate: 0, y: 0});
	};
});

hover(".skills-stats--item", (element) => {
	animate(element, {scale: 1.03, y: -5});
	animate(element.querySelector('.skills-stats--item-icon'), {scale: 1.1, rotate: 10, y: -5});
	return () => {
		animate(element, { scale: 1, y: 0});
		animate(element.querySelector('.skills-stats--item-icon'), {scale: 1, rotate: 0, y: 0});
	};
});

hover(".pluses--item", (element) => {
	animate(element, {scale: 1.04,}, { type: "spring"});
	return () => {
		animate(element, { scale: 1}, { type: "spring" });
	};
});

hover(".contact--list-item__animated", (element) => {
    animate(element, { scale: 1.03, y: -1, rotate: 0.5, x: 1.5 }, { type: "spring" });

    return () => animate(element, { scale: 1, y: 0, rotate: 0, x: 0 }, { type: "spring" });
});

hover(".circle-link", (element) => {
    animate(element, { scale: 1.05, y: -5, rotate: 0.5 }, { type: "spring" });

    return () => animate(element, { scale: 1, y: 0, rotate: 0 }, { type: "spring" });
});

const sections = ["main", "about", "projects", "skills", "contact"]

const navbarItems = {
  main: document.querySelector("#navbar-item--main"),
  about: document.querySelector("#navbar-item--about"),
  projects: document.querySelector("#navbar-item--projects"),
  skills: document.querySelector("#navbar-item--skills"),
  contact: document.querySelector("#navbar-item--contact"),
}

const rootElements = {
  main: document.querySelector("#root-elem--main"),
  about: document.querySelector("#root-elem--about"),
  projects: document.querySelector("#root-elem--projects"),
  skills: document.querySelector("#root-elem--skills"),
  contact: document.querySelector("#root-elem--contact"),
}

const changeActiveNavbarItem = (navbarItem) => {
	const currentActiveNavbarItems = document.querySelectorAll(".header--navbar-item__active");
	currentActiveNavbarItems.forEach(item => item.classList.remove("header--navbar-item__active"));
	navbarItem.classList.add("header--navbar-item__active");
};

document.addEventListener("scroll", event => {
	for (const section of sections) {
		const rect = rootElements[section].getBoundingClientRect();
		const currentNavbarItem = navbarItems[section];
		if (rect.top <= VIEWPORT_OFFSET && rect.top >= -1 * VIEWPORT_OFFSET) {
			changeActiveNavbarItem(currentNavbarItem);
		}
	}
})

const headerNavbarElement = document.querySelector(".header--navbar");

headerNavbarElement.addEventListener('click', (event) => {
	const targetElem = event.target.closest(".header--navbar-item");
	if (!targetElem) return;

	const targetSection = targetElem.id.split('--')[1];
	const targetRootElement = rootElements[targetSection];
	const bodyRect = document.body.getBoundingClientRect();
	const targetRect = targetRootElement.getBoundingClientRect();
	const targetNavbarItem = navbarItems[targetSection]

	window.scrollTo({behavior: "smooth", top: targetRect.top - bodyRect.top - SCROLL_OFFSET});
})