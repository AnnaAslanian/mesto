export default function renderLoading(loading, popup) {
  if (loading) {
    popup.querySelector(".popup__submit-button").textContent = "Сохранить";
  } else {
    popup.querySelector(".popup__submit-button").textContent = "Сохранение...";
  }
}