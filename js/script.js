//////////////////////////////////////////////
// Make mobile navigation work
/////////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

("nav-open");

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    number: document.getElementById("number").value,
  };

  var serviceID = "service_33ng0kr";
  var templateID = "template_4cznogm";

  emailjs
    .send(serviceID, templateID, params)
    .then(() => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      // document.getElementById("message").value = "";
      // document.getElementById("number").value = "";
      console.log("Your Message sent successfully");
      document.getElementsByClassName("successful")[0].style.display = "block";
    })
    .catch((err) => {
      console.log(err);
      document.getElementsByClassName("try-again")[0].style.display = "block";
    });
}
