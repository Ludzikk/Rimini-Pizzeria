const hamburgerNavBtn = document.querySelector(".nav__hamburger");
const mobileNav = document.querySelector(".nav__mobilecontainer");

const toggleMobileNav = () => {
	hamburgerNavBtn.classList.toggle("is-active");
	mobileNav.classList.toggle("active-mobile-nav");
	mobileNav.classList.toggle("unactive-mobile-nav");
	mobileNav.classList.remove("hidden");
};

hamburgerNavBtn.addEventListener("click", toggleMobileNav);