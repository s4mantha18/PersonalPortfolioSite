function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});
