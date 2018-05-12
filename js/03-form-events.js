// C : evt.target to *dynamically select* and then modify
//     the element where the event happened
//-------------------------------------------------
var doItBtn = document.querySelector('.do-it-btn')
var someTitleEl = document.querySelector('.yo-yo')

var modifyElement = function(evt){
   console.log(evt.target)
   evt.target.innerHTML = "WOAHHHH CLICKED!"
   evt.target.classList.add('urgent')
}

doItBtn.addEventListener('click', modifyElement)
someTitleEl.addEventListener('h2', modifyElement)
