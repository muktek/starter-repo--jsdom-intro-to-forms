// C : evt.target to *dynamically select* and then modify
//     the element where the event happened
//-------------------------------------------------

var formEl = document.querySelector('form')

formEl.addEventListener('submit', function(evt){
  // - Prevent default from reloading the page
  evt.preventDefault()

  // - Capture values from form els
  console.log(evt.currentTarget);
  var formEl = evt.currentTarget

  var nameInputEl = formEl.username
  var nameVal = nameInputEl.value

  var ageInputEl = formEl.age
  var ageVal = ageInputEl.value

  var genderInputEl = formEl.gender
  var genderVal = genderInputEl.value

  console.log(nameVal);
  console.log(ageVal);
  console.log(genderVal);

  var usernameOutputEl = document.querySelector('.username-output')
  var ageOutputEl = document.querySelector('.age-output')
  var genderOutputEl = document.querySelector('.gender-output')

  // - Check to see if there are values in the input-fields
  //   ... and insert text response on the DOM in ouput elements.

  if(nameVal.length > 0){
    usernameOutputEl.innerHTML = nameVal
  } else {
    usernameOutputEl.innerHTML = '<em>Please enter value for User Name field</em>'
  }

  if(ageVal.length > 0){
    ageOutputEl.innerHTML = ageVal
  } else {
    ageOutputEl.innerHTML = '<em>Please enter value for Age field</em>'
  }

  console.log(genderVal.length);
  if(genderVal.length > 0){
    genderOutputEl.innerHTML = genderVal
  } else {
    genderOutputEl.innerHTML = '<em>Please enter value for Gender field</em>'
  }



})
