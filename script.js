const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = form.elements.email.value;
    // check if it is a valid email, add/remove error msg
    if (!validateEmail(emailValue)) {
      form.classList.add("error");
    } else {
      form.classList.remove("error");
    }
  });
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
