const footerYear = document.querySelector("#year")

const setFooterYear = () => {
    const date = new Date()

    footerYear.textContent = date.getFullYear();
}

setFooterYear();