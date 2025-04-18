
/*sheet navbar*/ 
const menuBtn = document.querySelector("#menu-btn");
const navbarContainer = document.querySelector(".navbar-container");
menuBtn.addEventListener("click", () => {
    navbarContainer.classList.toggle("active")
    
})