const darkModeTrigger = document.getElementById("darkModeTrigger");
const imageTheme = darkModeTrigger.querySelector("img");
const navbarSelector = document.querySelector(".navbar-container");
const footerSelector = document.querySelector("footer");
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
  allAnimeArticle.forEach((article) => {
    article.classList.remove(localStorage.getItem("colorMode"));
    article.classList.add(colorMode)
  })
  imageTheme.src =
    colorMode === "dark-mode" ? "./icon/sun.svg" : "./icon/moon.svg";
  console.log(colorMode)
  localStorage.setItem("colorMode", colorMode);
});