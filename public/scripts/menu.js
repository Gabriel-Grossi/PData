let icon = document.querySelector(".menu-icon");

icon.addEventListener("click", () => {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active-menu");
})

let close = document.querySelector(".close");

close.addEventListener("click", () =>{
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active-menu");
})