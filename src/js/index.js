import '../scss/index.scss';

const input = document.querySelector(".sort__input");
const output = document.querySelector(".sort__output");
const btn = document.querySelector(".sort__btn");
const descending = document.querySelector("#descending");

const compare = (a, b) => {
    return descending.checked ? b - a : a - b;
};

btn.addEventListener("click", () => {
  const inputValue = input.value.split(",").sort(compare);
  if(output.value) output.value = "";
    
  inputValue.forEach(e => {
      const result = e.trim();
      output.value += `${result}\n`;
  });
});