
const buttons = document.querySelectorAll('section button');

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      alert("This will bring you to the project!");
    });
  });

document.getElementById("button1").addEventListener("click", () => {
    window.location.href = "https://owenfeds.github.io/Recipe-Website-Makeover/";
});