function hamburgerEvents(){
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeHamburger = document.getElementById("closeHamburger");

    hamburger.addEventListener("click",function(){
        if(mobileMenu.classList.contains("hidden")){
            mobileMenu.classList.remove("hidden");
        }
    });

    closeHamburger.addEventListener("click",function(){
        if(!mobileMenu.classList.contains("hidden")){
            mobileMenu.classList.add("hidden");
        }
    });
}


function init(){
    hamburgerEvents();
}init();