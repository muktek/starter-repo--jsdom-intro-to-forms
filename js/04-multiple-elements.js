//-------------------------------------------------
// Event listeners on multiple-elements
//  + using the evt object to capture
/// where an event happened
//-------------------------------------------------k

var collectionItemEls = document.querySelectorAll('.collection-item')
var collectionItemElsArray = [...collectionItemEls]
console.log(collectionItemEls)

// *** NOOOO You can't do this...
// addButtonEls.addEventListener("click", function(){
// 	console.log('rats')
// })

// *** Easiest to iterate over the array of elements and
function plusClickHandler(evt){
  var domElementOfEvent = evt.target
  var currentTargetDOMEl = evt.currentTarget

  if(domElementOfEvent.className === 'adder' ){
    var itemNameEl = currentTargetDOMEl.querySelector('.item-name')
    var cartListContainerEl =  document.querySelector('.your-cart')

    cartListContainerEl.innerHTML +=  '<li>' + itemNameEl.textContent + '</li>'
  }
}

function addListenerToItem( domElement, index, theArray ){
	domElement.addEventListener('click', plusClickHandler )
}

forEach( collectionItemElsArray , addListenerToItem )
