const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const cross = document.querySelector(".cross");

let linkOpen = false;

    burger.addEventListener("click", () => {

        if(!linkOpen){
        navLinks.classList.add("open");
        burger.classList.add("none");
        cross.classList.add("block");

        linkOpen = true;
        }

    });


    cross.addEventListener("click" , () => {
        if(linkOpen=true){
            navLinks.classList.remove("open");
        burger.classList.remove("none");
        cross.classList.remove("block");

        linkOpen = false;
        }
});
