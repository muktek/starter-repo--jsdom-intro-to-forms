
// I-a : Capture text value from <input class="user-input"/> element, put in
//       <p class="output-box">...</p>
//
// II-b : delete value in
//
//
// III-c : limit <input class="user-input"/> to 15 character maximum
//--------------------------------------------

var enterBtn = document.querySelector('.btn-enter')
var usrInputEl = document.querySelector('.user-input')

enterBtn.addEventListener('click', function(evt){
  var usrInputEl = document.querySelector('.user-input')
  var outputBoxEl = document.querySelector('.output-box')
  var theText = usrInputEl.value
  outputBoxEl.textContent = theText
  outputBoxEl.innerHTML = `Input is <u>${theText.length}</u> characters`
  usrInputEl.value = ''
})

usrInputEl.addEventListener('input', function(evt){
  var usrInputEl = evt.currentTarget
  console.log(usrInputEl);
  console.log(usrInputEl.value);
  if(usrInputEl.value.length > 10){
    usrInputEl.classList.add('user-input--err')
    usrInputEl.value = usrInputEl.value.slice(0,10)
  } else {
    usrInputEl.classList.remove('user-input--err')
  }


})
