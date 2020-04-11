// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if(!btn) { return; }
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}

let comboValue = window.pageYOffset || document.documentElement.scrollTop;
let pageY = window.pageYOffset
let sT = document.documentElement.scrollTop;
console.log(comboValue);
console.log(pageY);
console.log(sT);
