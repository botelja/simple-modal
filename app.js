const modalButton = document.getElementById("modalButton");
const modal = document.getElementById("simpleModal");
const closeModal = document.querySelector(".closeModal");

//Open modal
modalButton.addEventListener("click", () => {
  modal.style.visibility = "visible";
});

//Close modal
closeModal.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});
