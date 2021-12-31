const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn_burger");
const main_head = document.querySelector(".main_head");
let cross_icon = document.querySelector(".toggleRe");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        main_head.classList.add("show");

        setTimeout(() => {
            menuBtn.classList.add("open");
        }, 600);
        menuOpen = true;

        cross_icon.style.display = "block";
        cross_icon.setAttribute("onclick", "toggleRe()");

        main_head.append(cross_icon);
    } else {
        main_head.style.display = "none";
        cross_icon.style.display = "none";
        main_head.classList.remove("show");

        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});

function toggleRe() {
    setTimeout(() => {
        cross_icon.style.display = "none";
    }, 100);
    main_head.classList.remove("show");

    menuBtn.classList.remove("open");
    menuOpen = false;
}
window.addEventListener("click", function(event) {
    if (
        event.target != main_head &&
        event.target != menuBtn &&
        event.target != burger
    ) {
        setTimeout(() => {
            cross_icon.style.display = "none";
        }, 100);
        main_head.classList.remove("show");

        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});