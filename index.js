// Toggle Mobile Menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

/* --- POPUP MODAL LOGIC --- */
const modal = document.getElementById("contactModal");

// Open the modal
function openModal() {
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Stop scrolling
}

// Close the modal
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto"; // Enable scrolling
}

// Close if user clicks outside the box
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

/* --- FORM HANDLING --- */
document.getElementById("popupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page refresh

  const btn = this.querySelector("button");
  const originalText = btn.textContent;

  // Change button to success state
  btn.textContent = "Message Sent! 🚀";
  btn.style.background = "#22c55e"; // Green
  btn.style.color = "white";

  // Clear the form inputs
  this.reset();

  // Reset button after 2 seconds and close modal
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = "";
    closeModal();
  }, 2000);
});
