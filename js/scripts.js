const darkModeTrigger = document.getElementById("darkModeTrigger");
const imageTheme = darkModeTrigger.querySelector("img");
const navbarSelector = document.querySelector(".navbar-container");
const footerSelector = document.querySelector("footer");
const animeWidgetSelector = document.querySelectorAll(".anime-widget");
const allAnimeArticle = document.querySelectorAll(".anime-article");
localStorage.setItem("colorMode", "light-mode")
darkModeTrigger.addEventListener("click", () => {
    const colorMode = document.body.classList.contains("light-mode")
        ? "dark-mode"
        : "light-mode";
    document.body.className = colorMode;
    navbarSelector.classList.remove(localStorage.getItem("colorMode"));
    navbarSelector.classList.add(colorMode);
    footerSelector.classList.remove(localStorage.getItem("colorMode"));
    footerSelector.classList.add(colorMode);
    animeWidgetSelector.forEach(function (element) {
        element.classList.remove(localStorage.getItem("colorMode"));
        element.classList.add(colorMode);
    })

    allAnimeArticle.forEach((article) => {
        article.classList.remove(localStorage.getItem("colorMode"));
        article.classList.add(colorMode)
    })
    imageTheme.src =
        colorMode === "dark-mode" ? "./icon/sun.svg" : "./icon/moon.svg";
    console.log(colorMode)
    localStorage.setItem("colorMode", colorMode);
});


document.querySelector(".anime-recommendation-item").addEventListener('mouseenter', () => {
    const floatingWidget = document.querySelector('.anime-recommendation-widget');
    floatingWidget.style.display = 'block'; // Tampilkan widget
})


document.querySelector(".anime-recommendation-item").addEventListener('mouseleave', () => {
    const floatingWidget = document.querySelector('.anime-recommendation-widget');
    floatingWidget.style.display = 'none'; // Tampilkan widget
})


document.querySelector(".anime-airing-item").addEventListener('mouseenter', () => {
    const floatingWidget = document.querySelector('.anime-airing-widget');
    floatingWidget.style.display = 'block'; // Tampilkan widget
})


document.querySelector(".anime-airing-item").addEventListener('mouseleave', () => {
    const floatingWidget = document.querySelector('.anime-airing-widget');
    floatingWidget.style.display = 'none'; // Tampilkan widget
})
