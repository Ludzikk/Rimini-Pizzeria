const nav = document.querySelector(".nav");
const reviewsItems = document.querySelectorAll(".reviews__items");
const reviewsDots = document.querySelectorAll(".reviews__dot");
let triggerNav;

const addBorderToNav = () => {
	const header = document.querySelector(".header").getBoundingClientRect();
	triggerNav = header.bottom;

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



function changeReview() {
	const idOfDot = this.id;

	reviewsDots.forEach((dot) => {
		dot.classList.remove("dot-active");
	});

	this.classList.add("dot-active");

	reviewsItems.forEach((item) => {
		if (item.id === idOfDot) {
			item.classList.remove("hidden");
			item.classList.add("show-review")
		} else {
			item.classList.add("hidden");
			item.classList.remove("show-review")
		}
	});
}

const addListeners = () => {
	document.addEventListener("scroll", addBorderToNav);
	reviewsDots.forEach((dot) => {
		dot.addEventListener("click", changeReview);
	});
};
addListeners();
