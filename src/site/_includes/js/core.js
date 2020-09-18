// simple button click event handler
function eventHandler(selector, eventType, callback) {
  if (selector != "document") {
    var ele = document.querySelector(selector);
  } else {
    ele = document;
  }
  if(!ele) { return; }
  ele.addEventListener(eventType, function(event) {
    event.preventDefault();
    callback();
  }, false);
}

function removeClass(targetClass, className) {
  let items = document.getElementsByClassName(targetClass);
  Array.from(items).forEach((item) => {
    item.classList.remove(className)
  });
}
