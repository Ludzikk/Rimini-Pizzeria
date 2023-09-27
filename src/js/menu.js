const orderBtn = document.querySelectorAll(".menu__btn");
const orderAmount = document.querySelector(".order__amount");
const cartBtn = document.querySelector(".order__btn");
const cartList = document.querySelector(".order__list");
const orderContainer = document.querySelector(".order");
const closeBtn = document.querySelector(".order__close");
const valueOfCart = document.querySelector(".order__money");
const paymentItem = document.querySelectorAll(".order__paymentitem");
const endText = document.querySelector(".order__end");
const paymentList = document.querySelector(".order__paymentlist");
const nextBtn = document.querySelector(".order__next");
const everyFood = {
	margherita: {
		name: "Margherita",
		cost: 18,
	},
	diabelska: {
		name: "Diabelska",
		cost: 24,
	},
	wiejska: {
		name: "Wiejska",
		cost: 20,
	},
	serowa: {
		name: "Serowa",
		cost: 19,
	},
	frytki: {
		name: "Frytki",
		cost: 12,
	},
	ziemniaczki: {
		name: "Ziemniaczki",
		cost: 13,
	},
	sos: {
		name: "Sos czosnkowy, keczup",
		cost: 2,
	},
	napoj: {
		name: "Napój",
		cost: 8,
	},
};

function addToOrder() {
	switch (parseInt(this.id)) {
		case 1:
			if (sessionStorage.getItem("Margherita") === null) {
				sessionStorage.setItem("Margherita", 1);
			} else if (sessionStorage.getItem("Margherita") !== null) {
				const currentAmount = sessionStorage.getItem("Margherita");
				sessionStorage.setItem("Margherita", parseInt(currentAmount) + 1);
			}
			break;
		case 2:
			if (sessionStorage.getItem("Diabelska") === null) {
				sessionStorage.setItem("Diabelska", 1);
			} else if (sessionStorage.getItem("Diabelska") !== null) {
				const currentAmount = sessionStorage.getItem("Diabelska");
				sessionStorage.setItem("Diabelska", parseInt(currentAmount) + 1);
			}
			break;
		case 3:
			if (sessionStorage.getItem("Wiejska") === null) {
				sessionStorage.setItem("Wiejska", 1);
			} else if (sessionStorage.getItem("Wiejska") !== null) {
				const currentAmount = sessionStorage.getItem("Wiejska");
				sessionStorage.setItem("Wiejska", parseInt(currentAmount) + 1);
			}
			break;
		case 4:
			if (sessionStorage.getItem("Serowa") === null) {
				sessionStorage.setItem("Serowa", 1);
			} else if (sessionStorage.getItem("Serowa") !== null) {
				const currentAmount = sessionStorage.getItem("Serowa");
				sessionStorage.setItem("Serowa", parseInt(currentAmount) + 1);
			}
			break;
		case 5:
			if (sessionStorage.getItem("Frytki") === null) {
				sessionStorage.setItem("Frytki", 1);
			} else if (sessionStorage.getItem("Frytki") !== null) {
				const currentAmount = sessionStorage.getItem("Frytki");
				sessionStorage.setItem("Frytki", parseInt(currentAmount) + 1);
			}
			break;
		case 6:
			if (sessionStorage.getItem("Ziemniaczki") === null) {
				sessionStorage.setItem("Ziemniaczki", 1);
			} else if (sessionStorage.getItem("Ziemniaczki") !== null) {
				const currentAmount = sessionStorage.getItem("Ziemniaczki");
				sessionStorage.setItem("Ziemniaczki", parseInt(currentAmount) + 1);
			}
			break;
		case 7:
			if (sessionStorage.getItem("Sos") === null) {
				sessionStorage.setItem("Sos", 1);
			} else if (sessionStorage.getItem("Sos") !== null) {
				const currentAmount = sessionStorage.getItem("Sos");
				sessionStorage.setItem("Sos", parseInt(currentAmount) + 1);
			}
			break;
		case 8:
			if (sessionStorage.getItem("Napoj") === null) {
				sessionStorage.setItem("Napoj", 1);
			} else if (sessionStorage.getItem("Napoj") !== null) {
				const currentAmount = sessionStorage.getItem("Napoj");
				sessionStorage.setItem("Napoj", parseInt(currentAmount) + 1);
			}
			break;
	}

	checkAmount();
}

const checkAmount = () => {
	let amount = 0;

	if (sessionStorage.getItem("Margherita") !== null) {
		amount = amount + parseInt(sessionStorage.getItem("Margherita"));
	}

	if (sessionStorage.getItem("Diabelska") !== null) {
		amount = amount + parseInt(sessionStorage.getItem("Diabelska"));
	}

	if (sessionStorage.getItem("Wiejska") !== null) {
		amount = amount + parseInt(sessionStorage.getItem("Wiejska"));
	}

	if (sessionStorage.getItem("Serowa") !== null) {
		amount = amount + parseInt(sessionStorage.getItem("Serowa"));
	}

	if (sessionStorage.getItem("Frytki") !== null) {
		amount = amount + parseInt(sessionStorage.getItem("Frytki"));
	}

	if (sessionStorage.getItem("Ziemniaczki") !== null) {
		amount = amount + parseInt(sessionStorage.getItem("Ziemniaczki"));
	}

	if (sessionStorage.getItem("Sos") !== null) {
		amount = amount + parseInt(sessionStorage.getItem("Sos"));
	}

	if (sessionStorage.getItem("Napoj") !== null) {
		amount = amount + parseInt(sessionStorage.getItem("Napoj"));
	}

	orderAmount.textContent = amount;
};

const createItems = () => {
	const listItems = document.querySelectorAll(".order__item");

	listItems.forEach((item) => {
		item.remove();
	});

	if (sessionStorage.getItem("Margherita") !== null) {
		const item = document.createElement("li");
		const itemRightSide = document.createElement("div");
		const itemName = document.createElement("p");
		const itemAmount = document.createElement("p");
		const itemPrice = document.createElement("p");

		item.setAttribute("class", "order__item");
		itemRightSide.setAttribute("class", "order__right");
		itemName.setAttribute("class", "order__name");
		itemName.textContent = everyFood.margherita.name;
		itemAmount.setAttribute("class", "order__howmany");
		itemAmount.textContent = sessionStorage.getItem("Margherita") + "szt";
		itemPrice.setAttribute("class", "order__price");
		itemPrice.textContent =
			sessionStorage.getItem("Margherita") * everyFood.margherita.cost + "zł";
		itemRightSide.append(itemAmount, itemPrice);
		item.append(itemName, itemRightSide);
		cartList.append(item);
	}

	if (sessionStorage.getItem("Diabelska") !== null) {
		const item = document.createElement("li");
		const itemRightSide = document.createElement("div");
		const itemName = document.createElement("p");
		const itemAmount = document.createElement("p");
		const itemPrice = document.createElement("p");

		item.setAttribute("class", "order__item");
		itemRightSide.setAttribute("class", "order__right");
		itemName.setAttribute("class", "order__name");
		itemName.textContent = everyFood.diabelska.name;
		itemAmount.setAttribute("class", "order__howmany");
		itemAmount.textContent = sessionStorage.getItem("Diabelska") + "szt";
		itemPrice.setAttribute("class", "order__price");
		itemPrice.textContent =
			sessionStorage.getItem("Diabelska") * everyFood.diabelska.cost + "zł";
		itemRightSide.append(itemAmount, itemPrice);
		item.append(itemName, itemRightSide);
		cartList.append(item);
	}

	if (sessionStorage.getItem("Wiejska") !== null) {
		const item = document.createElement("li");
		const itemRightSide = document.createElement("div");
		const itemName = document.createElement("p");
		const itemAmount = document.createElement("p");
		const itemPrice = document.createElement("p");

		item.setAttribute("class", "order__item");
		itemRightSide.setAttribute("class", "order__right");
		itemName.setAttribute("class", "order__name");
		itemName.textContent = everyFood.wiejska.name;
		itemAmount.setAttribute("class", "order__howmany");
		itemAmount.textContent = sessionStorage.getItem("Wiejska") + "szt";
		itemPrice.setAttribute("class", "order__price");
		itemPrice.textContent =
			sessionStorage.getItem("Wiejska") * everyFood.wiejska.cost + "zł";
		itemRightSide.append(itemAmount, itemPrice);
		item.append(itemName, itemRightSide);
		cartList.append(item);
	}

	if (sessionStorage.getItem("Serowa") !== null) {
		const item = document.createElement("li");
		const itemRightSide = document.createElement("div");
		const itemName = document.createElement("p");
		const itemAmount = document.createElement("p");
		const itemPrice = document.createElement("p");

		item.setAttribute("class", "order__item");
		itemRightSide.setAttribute("class", "order__right");
		itemName.setAttribute("class", "order__name");
		itemName.textContent = everyFood.serowa.name;
		itemAmount.setAttribute("class", "order__howmany");
		itemAmount.textContent = sessionStorage.getItem("Serowa") + "szt";
		itemPrice.setAttribute("class", "order__price");
		itemPrice.textContent =
			sessionStorage.getItem("Serowa") * everyFood.serowa.cost + "zł";
		itemRightSide.append(itemAmount, itemPrice);
		item.append(itemName, itemRightSide);
		cartList.append(item);
	}

	if (sessionStorage.getItem("Frytki") !== null) {
		const item = document.createElement("li");
		const itemRightSide = document.createElement("div");
		const itemName = document.createElement("p");
		const itemAmount = document.createElement("p");
		const itemPrice = document.createElement("p");

		item.setAttribute("class", "order__item");
		itemRightSide.setAttribute("class", "order__right");
		itemName.setAttribute("class", "order__name");
		itemName.textContent = everyFood.frytki.name;
		itemAmount.setAttribute("class", "order__howmany");
		itemAmount.textContent = sessionStorage.getItem("Frytki") + "szt";
		itemPrice.setAttribute("class", "order__price");
		itemPrice.textContent =
			sessionStorage.getItem("Frytki") * everyFood.frytki.cost + "zł";
		itemRightSide.append(itemAmount, itemPrice);
		item.append(itemName, itemRightSide);
		cartList.append(item);
	}

	if (sessionStorage.getItem("Ziemniaczki") !== null) {
		const item = document.createElement("li");
		const itemRightSide = document.createElement("div");
		const itemName = document.createElement("p");
		const itemAmount = document.createElement("p");
		const itemPrice = document.createElement("p");

		item.setAttribute("class", "order__item");
		itemRightSide.setAttribute("class", "order__right");
		itemName.setAttribute("class", "order__name");
		itemName.textContent = everyFood.ziemniaczki.name;
		itemAmount.setAttribute("class", "order__howmany");
		itemAmount.textContent = sessionStorage.getItem("Ziemniaczki") + "szt";
		itemPrice.setAttribute("class", "order__price");
		itemPrice.textContent =
			sessionStorage.getItem("Ziemniaczki") * everyFood.ziemniaczki.cost + "zł";
		itemRightSide.append(itemAmount, itemPrice);
		item.append(itemName, itemRightSide);
		cartList.append(item);
	}

	if (sessionStorage.getItem("Sos") !== null) {
		const item = document.createElement("li");
		const itemRightSide = document.createElement("div");
		const itemName = document.createElement("p");
		const itemAmount = document.createElement("p");
		const itemPrice = document.createElement("p");

		item.setAttribute("class", "order__item");
		itemRightSide.setAttribute("class", "order__right");
		itemName.setAttribute("class", "order__name");
		itemName.textContent = everyFood.sos.name;
		itemAmount.setAttribute("class", "order__howmany");
		itemAmount.textContent = sessionStorage.getItem("Sos") + "szt";
		itemPrice.setAttribute("class", "order__price");
		itemPrice.textContent =
			sessionStorage.getItem("Sos") * everyFood.sos.cost + "zł";
		itemRightSide.append(itemAmount, itemPrice);
		item.append(itemName, itemRightSide);
		cartList.append(item);
	}

	if (sessionStorage.getItem("Napoj") !== null) {
		const item = document.createElement("li");
		const itemRightSide = document.createElement("div");
		const itemName = document.createElement("p");
		const itemAmount = document.createElement("p");
		const itemPrice = document.createElement("p");

		item.setAttribute("class", "order__item");
		itemRightSide.setAttribute("class", "order__right");
		itemName.setAttribute("class", "order__name");
		itemName.textContent = everyFood.napoj.name;
		itemAmount.setAttribute("class", "order__howmany");
		itemAmount.textContent = sessionStorage.getItem("Napoj") + "szt";
		itemPrice.setAttribute("class", "order__price");
		itemPrice.textContent =
			sessionStorage.getItem("Napoj") * everyFood.napoj.cost + "zł";
		itemRightSide.append(itemAmount, itemPrice);
		item.append(itemName, itemRightSide);
		cartList.append(item);
	}

	cartList.classList.remove("hidden");
	paymentList.classList.add("hidden");
	nextBtn.classList.remove("hidden");
	endText.classList.add("hidden");

	toggleCart();
	setValueOfCart();
};

const toggleCart = () => {
	orderContainer.classList.toggle("hidden");
};

const setValueOfCart = () => {
	if (orderAmount.textContent !== 0) {
		const allItems = document.querySelectorAll(".order__price");
		const sum = [];
		let cost = 0;

		allItems.forEach((item) => {
			sum.push(parseInt(item.textContent.slice(0, -2)));
		});

		for (let i = 0; i < sum.length; i++) {
			cost = cost + sum[i];
		}
		valueOfCart.textContent = cost + "zł";
	}
};

const togglePayment = () => {
	paymentList.classList.remove("hidden");
	cartList.classList.add("hidden");
	nextBtn.classList.toggle("hidden");
};

const endOfOrder = () => {
	paymentList.classList.add("hidden");
	endText.classList.remove("hidden");

	sessionStorage.removeItem("Margherita");
	sessionStorage.removeItem("Diabelska");
	sessionStorage.removeItem("Wiejska");
	sessionStorage.removeItem("Serowa");
	sessionStorage.removeItem("Frytki");
	sessionStorage.removeItem("Ziemniaczki");
	sessionStorage.removeItem("Sos");
	sessionStorage.removeItem("Napoj");

	checkAmount()
};

orderBtn.forEach((btn) => {
	btn.addEventListener("click", addToOrder);
});
cartBtn.addEventListener("click", createItems);
closeBtn.addEventListener("click", toggleCart);
paymentItem.forEach((item) => {
	item.addEventListener("click", endOfOrder);
});
nextBtn.addEventListener("click", togglePayment);

checkAmount();
