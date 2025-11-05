
const buttons = document.querySelectorAll('section button');

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      alert("You clicked a Project!");
    });
  });

document.getElementById("button1").addEventListener("click", () => {
    window.location.href = "google.com";
});