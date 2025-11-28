let firstName = "Иван"
let lastName = "Иванов"
let surname = "Иванович"
console.log(lastName)
console.log(firstName)
console.log(surname)
console.log(lastName, firstName, surname)


const selectDay = document.getElementById('day');
const selectMonth = document.getElementById('month');
const selectYear = document.getElementById('year');

const resultDiv = document.getElementById('result'); 


function updateResult() {

  const dayValue = selectDay ? selectDay.value : 'N/A';
  const monthValue = selectMonth ? selectMonth.value : 'N/A';
  const yearValue = selectYear ? selectYear.value : 'N/A';

  const fullResult = `${dayValue} ${monthValue} ${yearValue}`;
  if (resultDiv) {
      resultDiv.innerHTML = fullResult;
  }
  
  console.log(fullResult);
}



function handleChange(event) {

  updateResult();
}



if (selectDay) {
    selectDay.addEventListener('change', handleChange);
}
if (selectMonth) {
    selectMonth.addEventListener('change', handleChange);
}
if (selectYear) {
    selectYear.addEventListener('change', handleChange);
}


updateResult();