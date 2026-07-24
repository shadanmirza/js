const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function (e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  
  if (height === ''|| height < 0 || isNaN(height)) {
    results.innerHTML = `please enter the valid height ${height}`
  } else if (weight === ''|| weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter the valid weight ${weight}`
  } else {
     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
     //show the result
     let category = '';           // If you skip declaring let category = ''; at the top and just write category = 'Under Weight', JavaScript automatically creates category as a Global Variable.
     if (bmi < 18.6) {
      category = ('Under Weight');
      
     } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = ('Normal Weight');
     } else {
      category = ('Overweight');
     }
     results.innerHTML = `<span>${bmi} ${category}</span>`;
  }
})