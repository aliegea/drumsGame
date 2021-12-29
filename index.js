let drumsNum = document.querySelectorAll(".drum");
function handleclick(e) {
  let letter = e.target.innerText;
  let audio = new Audio("sounds/" + letter + ".mp3");
  audio.play();
}
drumsNum.forEach((element) => element.addEventListener("click", handleclick));
