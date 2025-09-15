document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-msg").textContent = "✅ Gracias por tu mensaje. Te contactaremos pronto.";
  this.reset();
});
