// .onChange function to modify another element
//--------------------------------------------


// I-a : Listen to 'change' event on checkbox (use specific selector),
//       put result on DOM
//--------------------------------------------

var ageCheckboxEl = document.querySelector('input[name="validage"]')


ageCheckboxEl.addEventListener('change', function(evt){
  var checkboxEl = evt.currentTarget
  var outputEl = document.querySelector('.result-age')
  if(checkboxEl.checked === true){
    outputEl.innerHTML = 'YES'
  } else {
    outputEl.innerHTML = 'NO'
  }
})


// II-b : Listen to change event on
//--------------------------------------------

var surveyRadioEls = document.querySelectorAll('input[name="survey"]')
var surveyRadioElsArray = [...surveyRadioEls]
surveyRadioElsArray.forEach(function(radioEl){
  radioEl.addEventListener('change', function(evt){
    var outputEl = document.querySelector('.result-liked')
    var radioEl = evt.currentTarget
    radioElVal = radioEl.value

    outputEl.innerHTML = radioElVal
  })
})
