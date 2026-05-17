const BACKEND_URL = 'https://robgid.space/api/send';

const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
	mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach((a) => {
	a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
	let current = '';
	sections.forEach((s) => {
		if (window.scrollY >= s.offsetTop - 80) current = s.id;
	});
	navLinks.forEach((a) => {
		a.classList.toggle('active', a.getAttribute('href') === '#' + current);
	});
});

const fadeEls = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver(
	(entries) => {
		entries.forEach((e) => {
			if (e.isIntersecting) e.target.classList.add('visible');
		});
	},
	{ threshold: 0.1 }
);
fadeEls.forEach((el) => io.observe(el));

const icons = document.querySelectorAll('.ts-icon');
const activeName = document.getElementById('tsActiveName');
let currentIdx = 0;
let hovering = false;

function setName(text) {
	activeName.classList.add('fade-out');
	activeName.classList.remove('fade-in-up');

	setTimeout(() => {
		activeName.textContent = text || '\u00a0';
		activeName.classList.remove('fade-out');
		activeName.classList.add('fade-in-up');

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				activeName.classList.remove('fade-in-up');
			});
		});
	}, 220);
}

function spotlight(idx) {
	icons.forEach((el) => el.classList.remove('spotlight'));
	const el = icons[idx];
	el.classList.add('spotlight');
	setName(el.dataset.title);
	currentIdx = idx;
}

setInterval(() => {
	if (!hovering) spotlight((currentIdx + 1) % icons.length);
}, 1800);

icons.forEach((el) => {
	el.addEventListener('mouseenter', () => {
		hovering = true;
		icons.forEach((e) => e.classList.remove('spotlight'));
		setName(el.dataset.title);
	});
	el.addEventListener('mouseleave', () => {
		hovering = false;
		setName('\u00a0');
	});
});

spotlight(0);

const contactFormElement = document.querySelector('#contact-form');

contactFormElement.addEventListener('submit', async (event) => {
	event.preventDefault();
	if (!event.target.checkValidity()) {
		return;
	}
	const formData = new FormData(contactFormElement);
	const message = {};
	formData.forEach((value, key) => (message[key] = value));
	fetch(BACKEND_URL, {
		method: 'POST',
		body: JSON.stringify(message),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	event.target.reset();
	const btn = event.target.querySelector('.btn-send');
	btn.textContent = '✅ Sent!';
	btn.style.background = '#22d3a5';
	setTimeout(() => {
		btn.textContent = '✈ Send Message';
		btn.style.background = '';
		event.target.reset();
	}, 3000);
});

const params = new URLSearchParams(window.location.search);
const current = params.get('lang') || 'ru';

const switcher = document.getElementById('langSwitcher');
const indicator = document.getElementById('langIndicator');
const buttons = switcher.querySelectorAll('.lang-btn');

function setLang(lang) {
	buttons.forEach((btn) => {
		btn.classList.toggle('active', btn.dataset.lang === lang);
	});
	if (lang === 'en') {
		indicator.classList.add('right');
	} else {
		indicator.classList.remove('right');
	}
}

setLang(current);

buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		const lang = btn.dataset.lang;
		if (lang === current) return;
		const url = new URL(window.location.href);
		url.searchParams.set('lang', lang);
		window.location.href = url.toString();
	});
});
