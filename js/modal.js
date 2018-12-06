var modalPopup = document.querySelector(".modal-window-container");
var writeUsButton = document.querySelector(".contacts__button");
var closePopup = document.querySelector(".modal-close-button");

writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("visually-hidden");
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("visually-hidden");
});


