const body = document.body;
const triggerMenu = document.querySelector(".bottom-menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        setTimeout(function () {
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
        }, 300);
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ) {
        // up
        setTimeout(function () {
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
        }, 300);
    }
    lastScroll = currentScroll;
});