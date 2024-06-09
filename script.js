let threeLine = document.querySelector("#three-line-icon");
let closeIcon = document.querySelector("#close-icon");
let navlinks = document.querySelector(".navlinks");
let themeBtn = document.querySelector(".theme-icon");


function setTheme(theme) {
     const themeIcon = document.querySelector(".theme-icon i");

    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        document.body.classList.remove('dark-theme');
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}


threeLine.addEventListener("click", () => {
    navlinks.style.display = "flex"
    navlinks.style.right = "0"
})

closeIcon.addEventListener("click", () => {
    navlinks.style.display = "none"
    navlinks.style.right = "-300px"
})

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
        let themeIcon = document.querySelector(".theme-icon i");

        if (document.body.classList.contains("dark-theme")) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }

        theme_btn.prepend(themeIcon);
})


let typed = new Typed(".frontend-txt", {
    strings: ["Frontend Developer.", "Web developer.", "Frontend Developer."],
    typeSpeed: 150,
    backSpeed: 150,
    looped: true
})


$('.owl-carousel').owlCarousel({
    loop:false,
    margin:40,
    nav:false,
    autoplay: false,
    autoplayTimeout: 1000,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        476:{
            items:1
        },
        576:{
            items:1
        },
        786:{
            items:1
        },
        900:{
            items:1
        },
        1200:{
            items:3
        },
    }
})