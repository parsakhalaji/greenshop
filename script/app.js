const hamburger = document.querySelector(".nav__hamburger")
const mobileMenu = document.querySelector(".menu--mobile")

let isOpen = false;
hamburger.addEventListener("click", () => {
    if(!isOpen) {
        mobileMenu.style.top = "5.5rem"
        isOpen = true
    } else {
        mobileMenu.style.top = "-20rem"
        isOpen = false
    }
    
})