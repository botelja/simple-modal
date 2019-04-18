const modalButton = document.getElementById("modalButton");
const modal = document.getElementById("simpleModal");
const closeModal = document.querySelector(".closeModal");

//Open modal
modalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

//Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
