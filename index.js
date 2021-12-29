let drumsNum = document.querySelectorAll(".drum");
function handleclick(e) {
  let letter = e.target.innerText;
  let audio = new Audio("sounds/" + letter + ".mp3");
  audio.play();

  buttonAnimation(letter);
}
drumsNum.forEach((element) => element.addEventListener("click", handleclick));
document.addEventListener("keydown", function (e) {
  audio = new Audio("sounds/" + e.key + ".mp3");
  audio.play();
  buttonAnimation(e.key);
});

function buttonAnimation(key) {
  let activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 500);
}
