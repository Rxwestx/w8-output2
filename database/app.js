window.addEventListener("load", () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  if (email && password) {
    const $email = document.getElementById("js-email");
    const $password = document.getElementById("js-password");
    $email.value = email;
    $password.value = password;
  }
});

const $form = document.getElementById("js-form");
$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData($form);

  localStorage.setItem("email", formData.get("email"));
  localStorage.setItem("password", formData.get("password"));
});
