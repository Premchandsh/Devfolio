let threeLine = document.querySelector("#three-line-icon");
let closeIcon = document.querySelector("#close-icon");
let navlinks = document.querySelector(".navlinks");

threeLine.addEventListener("click", () => {
    navlinks.style.display = "flex"
    navlinks.style.right = "0"
})

closeIcon.addEventListener("click", () => {
    navlinks.style.display = "none"
    navlinks.style.right = "-300px"
})


let typed = new Typed(".frontend-txt", {
    strings: ["Frontend Developer.", "Web developer.", "Frontend Developer."],
    typeSpeed: 150,
    backSpeed: 150,
    looped: true
})