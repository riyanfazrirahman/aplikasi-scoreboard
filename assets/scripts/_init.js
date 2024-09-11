function handleChangeName(teamId) {
  const nameDisplay = document.getElementById(`nameDisplay${teamId}`);
  const buttonChangeName = nameDisplay.querySelector(".buttonChangeName");

  buttonChangeName.addEventListener("click", function () {
    const currentName = nameDisplay.childNodes[0].textContent.trim();

    // Membuat element input untuk menggati nama tim
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.className = "nameDisplay";
    inputName.value = currentName;

    // Membuat element button untuk mengset nama yg di input
    const buttonSetName = document.createElement("button");
    buttonSetName.textContent = "Set";
    buttonSetName.className = "btnSetName";

    nameDisplay.innerHTML = "";
    nameDisplay.appendChild(inputName);
    nameDisplay.appendChild(buttonSetName);

    // Event untuk tombol set ganti nama tim
    buttonSetName.addEventListener("click", function () {
      const newName = inputName.value;

      // Mengembalikan display seperti awal
      nameDisplay.innerHTML =
        newName + ' <span class="buttonChangeName">Change name..</span>';

      handleChangeName(teamId);
    });
  });
}

function handleScoreCounter(teamId) {
  const scoreElement = document.querySelector(`#team${teamId} .score`);
  const buttons = document.querySelectorAll(`#team${teamId} .counter .btn`);

  let score = parseInt(scoreElement.textContent);

  // Event untuk tombol tambah kurang
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent === "+") {
        score++;
      } else if (this.textContent === "-") {
        score--;
        if (score <= 0) {
          score = 0;
        }
      }
      scoreElement.textContent = score;
    });
  });
}
