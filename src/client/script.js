import constants from "./constants.js";

const {
  addNotesBtn,
  addNotesContainer,
  body,
  gradientColor,
  bodyColor,
  form,
  closeIcon,
  inputs,
} = constants;

let userNameInput;
let userEmailInput;
let userDescriptionInput;
const values = {};
let arrData = [];

const BASE_URL = "http://localhost:8080/api";

function handleAddNotes() {
  addNotesContainer.classList.remove("active");
  if (addNotesContainer.classList.contains("active")) {
    body.style.background = bodyColor;
  } else {
    body.style.background = gradientColor;
  }
}

function handleCloseIcon() {
  addNotesContainer.classList.add("active");
  body.style.background = bodyColor;
}

addNotesBtn.addEventListener("click", handleAddNotes);
closeIcon.addEventListener("click", handleCloseIcon);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    let name = input.dataset.input;
    let value = input.value;
    // values = { ...values, [name]: value };
    values[name] = value;
  });

  addNotesContainer.classList.add("active");
  body.style.background = bodyColor;

  sendingDataToBackend();

  inputs.forEach((input) => {
    input.value = "";
  });
});

async function sendingDataToBackend() {
  try {
    const response = await fetch("http://localhost:8080/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Getting all notes

async function gettingNotes() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}
