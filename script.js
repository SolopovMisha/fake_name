const form = document.querySelector('form');
const result = document.getElementById('result');

form.onchange = () => {
  const { day, month, year } = form.elements;
  result.textContent = `${day.value} ${month.value} ${year.value}`;
};

form.onchange();