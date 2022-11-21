
// Работа с шапкой при скроле
export function headerScroll() {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.scrollY > 20) {
            header.classList.add("_header-scroll");
        } else {
            header.classList.remove("_header-scroll");
        }
    }
}
