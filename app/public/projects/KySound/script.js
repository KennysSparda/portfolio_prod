function toggleLoop(buttonNumber) {
  let audioId = "audio" + buttonNumber;
  let audio = document.getElementById(audioId);
  let repeatButton = document.getElementById("repeat-button-" + buttonNumber);

  if (audio.loop) {
    audio.loop = false;
    repeatButton.textContent = "Repetir";
  } else {
    audio.loop = true;
    repeatButton.textContent = "Repetindo";
  }

  repeatButton.classList.toggle("active", audio.loop);
}

function playAudio(buttonNumber) {
  let audioId = "audio" + buttonNumber;
  let audio = document.getElementById(audioId);

  if (!audio.loop) {
    audio.currentTime = 0;
  }

  audio.play();
}
function addButtonListeners() {
  const buttons = document.getElementsByClassName("btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      let buttonNumber = this.id.split("-")[1];
      playAudio(buttonNumber);
    });
  }
}

function addRepeatButtons() {
  const buttons = document.getElementsByClassName("btn");
  const sidebar = document.getElementById("sidebar");

  for (let i = 0; i < buttons.length; i++) {
    let buttonNumber = buttons[i].id.split("-")[1];
    let repeatButton = document.createElement("button");
    repeatButton.id = "repeat-button-" + buttonNumber;
    repeatButton.className = "repeat-button";
    repeatButton.textContent = "Repetir";
    repeatButton.addEventListener("click", function() {
      toggleLoop(buttonNumber);
    });
    sidebar.appendChild(repeatButton);
  }
}

addButtonListeners();
addRepeatButtons();
