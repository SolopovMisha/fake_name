const form = document.querySelector('form');
const result = document.getElementById('result');
const { day, month, year } = form.elements;

form.onchange = () => {
  result.textContent = `${day.value} ${month.value} ${year.value}`;
};

form.onchange();