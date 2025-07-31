function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

(function () {
  emailjs.init("k4nMtUV2vK6-vn7di"); // Replace with your EmailJS public key
})();

// Form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_e69ukv9", "template_hroaall", this).then(
      function () {
        document.getElementById("status-message").innerText =
          "Message sent successfully!";
        document.getElementById("contact-form").reset();
      },
      function (error) {
        document.getElementById("status-message").innerText =
          "Failed to send message. Try again!";
        console.log(error);
      }
    );
  });
