
/*sheet navbar*/ 
const menuBtn = document.querySelector("#menu-btn");
const navbarContainer = document.querySelector(".navbar-container");
menuBtn.addEventListener("click", () => {
    navbarContainer.classList.toggle("active")
    
})

/*Form modal*/
const modalFormBtn = document.querySelector("#modal-form-btn");
const modal = document.querySelector("#form-modal-container");
const closeModal = document.querySelector("#close-modal");
const overlay = document.querySelector("#modal-overlay");
const sendBtnForm = document.querySelector("#button-submit");
const paragraph = document.querySelector(".paragraph")

modalFormBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

overlay.addEventListener("click", () => {
    modal.classList.add("active");
    modal.classList.remove("active")
})

sendBtnForm.addEventListener("click", () => {
    alert("Esse formulário não vai pra lugar nenhum kkkk...")
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  document.querySelectorAll('.timeline li').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });