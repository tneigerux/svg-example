// simple button click event handler
function clickHandler(selector, callback) {
  var ele = document.querySelector(selector);
  if(!ele) { return; }
  ele.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}

/*

function showEmailForm(selector) {
  selector.style.display = 'block';
}

document.addEventListener('click', function (event) {

  let 

	if (event.target.matches('foo')) {   
		showEmailForm('email-modal', event);
	}
}, false);



let comboValue = window.pageYOffset || document.documentElement.scrollTop;
let pageY = window.pageYOffset
let sT = document.documentElement.scrollTop;
console.log(comboValue);
console.log(pageY);
console.log(sT);

*/
