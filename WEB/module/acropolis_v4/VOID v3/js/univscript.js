const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")
const scrollContainer = () => {
    return document.documentElement || document.body;
};
document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }
})
const goToTop = () => {
    document.body.scrollIntoView();
};
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    if (e.keyCode === 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        return false;
    }
    if (e.ctrlKey && e.keyCode === 85) {
        return false;
    }
}