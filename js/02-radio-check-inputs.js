// .onChange function to modify another element
//--------------------------------------------


// I-a : Listen to 'change' event on checkbox (use specific selector),
//       put result on DOM
//--------------------------------------------

var ageCheckboxEl = document.querySelector('input[name="validage"]')


ageCheckboxEl.addEventListener('change', function(evt){
  ///.....
})


// II-b : Listen to change event on
//--------------------------------------------

var surveyRadioEls = document.querySelectorAll('input[name="survey"]')
var surveyRadioElsArray = [...surveyRadioEls]
surveyRadioElsArray.forEach(function(radioEl){
  radioEl.addEventListener('change', function(evt){
    ///.....
  })
})
