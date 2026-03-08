let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search-alt-2");

searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search-alt-2", "bx-x");
    }
    else{
        searchBox.classList.replace("bx-x", "bx-search-alt-2");
    }
});

// sidebar open close js code

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "0";
});
closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "-100%";
});

// sidebar sub menu open close js code

let aboutUs = document.querySelector(".about-us");
aboutUs.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1");
});
// let ourMedia = document.querySelector(".our-media");
// ourMedia.addEventListener("click", ()=>{
//     navLinks.classList.toggle("show2");
// });
let pta = document.querySelector(".pta");
pta.addEventListener("click", ()=>{
    navLinks.classList.toggle("show3");
});