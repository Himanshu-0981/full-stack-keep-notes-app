const addNotesBtn = document.querySelector(".add-notes-btn");
const addNotesContainer = document.querySelector(".add-notes-container");
const body = document.body;
const form = document.querySelector("form");
const closeIcon = document.querySelector(".close-icon");
const userName = document.querySelector('form input[type="text"]');
const userEmail = document.querySelector('form input[type="email"]');
const userDescription = document.querySelector("textarea");
const submitBtn = document.querySelector('form input[type="submit"]');
const inputs = document.querySelectorAll(
  "form input[type='text'],input[type='email'],textarea"
);
const gradientColor = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`;
const bodyColor = "#fff";

export default {
  addNotesBtn,
  addNotesContainer,
  body,
  form,
  closeIcon,
  userName,
  userEmail,
  userDescription,
  submitBtn,
  inputs,
  gradientColor,
  bodyColor,
};
