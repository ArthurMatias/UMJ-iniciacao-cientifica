function switchTab(tabName) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => (content.style.display = "none"));

  document.getElementById(tabName).style.display = "block";
  document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add("active");
}

function openModal(title, message, date, colorClass) {
  document.getElementById(
    "modal-title"
  ).innerHTML = `<span class="dot ${colorClass}"></span> ${title}`;
  document.getElementById("modal-message").innerHTML = message;
  document.getElementById("modal-date").textContent = date;
  document.getElementById("modal-overlay").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal-overlay").style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
  switchTab("notificacoes");
});
