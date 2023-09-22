const nav = document.querySelector(".nav");
const faqItems = document.querySelectorAll(".faq");
const hamburgerNavBtn = document.querySelector(".nav__hamburger");
const mobileNav = document.querySelector(".nav__mobilecontainer");
let triggerNav;

const addBorderToNav = () => {
	const aboutMe = document.querySelector(".aboutus").getBoundingClientRect();
	triggerNav = aboutMe.top;

	if (triggerNav <= 90) {
		nav.classList.add("header-active");
		nav.classList.remove("header-unactive");
	} else if (
		triggerNav > 90 &&
		triggerNav < 200 &&
		nav.classList.contains("header-active")
	) {
		nav.classList.remove("header-active");
		nav.classList.add("header-unactive");
	} else if (triggerNav > 500) {
		nav.classList.remove("header-unactive");
	}
};

// function toggleFaq() {
// 	this.classList.toggle("faq-active");
// }

const toggleMobileNav = () => {
	hamburgerNavBtn.classList.toggle("is-active");
	mobileNav.classList.toggle("active-mobile-nav");
	mobileNav.classList.toggle("unactive-mobile-nav");
	mobileNav.classList.remove("hidden");
};

const addListeners = () => {
	document.addEventListener("scroll", addBorderToNav);
	// faqItems.forEach((item) => {
	// 	item.addEventListener("click", toggleFaq);
	// });
	hamburgerNavBtn.addEventListener("click", toggleMobileNav);
};

addListeners();
