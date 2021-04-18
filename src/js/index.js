import "../scss/index.scss";

const input = document.querySelector(".sort__input");
const output = document.querySelector(".sort__output");
const btn = document.querySelector(".sort__btn");
const descending = document.querySelector("#descending");
const errMsg = document.querySelector(".error-message");

const compare = (a, b) => {
  return descending.checked ? b - a : a - b;
};

const regexp = /^((\s*(0|([1-9][0-9]*)))\s*,\s*)+(0|([1-9][0-9]*))\s*$/;

btn.addEventListener("click", () => {
  if (regexp.test(input.value)) {
    if (errMsg.style.opacity == 1) errMsg.style.opacity = 0;
    if (output.value) output.value = "";

    input.value
      .split(",")
      .sort(compare)
      .forEach((e) => {
        const result = e.trim();
        output.value += `${result}\n`;
      });
  } else {
    errMsg.style.opacity = 1;
  }
});
