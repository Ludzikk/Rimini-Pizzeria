const imgContainer = document.querySelector(".img");
const img = document.querySelector(".img__pic");
const quitBg = document.querySelector(".img__bg");
const imgItems = document.querySelectorAll(".galery__imgcontainer");

function showImg() {
	const imgSrc = this.firstElementChild.getAttribute("src");
	const imgAlt = this.firstElementChild.getAttribute("alt");
    
	imgContainer.classList.remove("hidden");
	img.setAttribute("src", imgSrc);
	img.setAttribute("alt", imgAlt);
}

const closeImg = () => {
	imgContainer.classList.add("hidden");
};

const addListeners = () => {
	quitBg.addEventListener("click", closeImg);

	imgItems.forEach((item) => {
		item.addEventListener("click", showImg);
	});
};

addListeners();
