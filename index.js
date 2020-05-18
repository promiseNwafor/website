const hamburger = document.querySelector("#hamburger");
const visibleClass = document.querySelector("#nav-links");

hamburger.addEventListener('click', () => {
    visibleClass.classList.toggle("visible"),
    hamburger.classList.toggle("overlay")
})
