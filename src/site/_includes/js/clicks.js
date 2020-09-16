// Open the "Receive email updates" address collector.

eventHandler('.sidebar .actions h3', 'click', function(){
  let hiddenForm = document.getElementsByClassName('email-modal');
  hiddenForm[0].style.display = "block";
});

// Close the address collector with no entry.

eventHandler('.cancel-submit-btn', 'click', function(){
  let hiddenForm = document.getElementsByClassName('email-modal');
  hiddenForm[0].style.display = "none";
});

// Activate hamburger menu

eventHandler('.header__burger', 'click', function(){
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
  //IE9 support?
});

// Show-hide contact-form

eventHandler('.expand-form', 'click', function(){
  document.querySelector('#expand-form').classList.add('form-invisible');
  document.querySelector('.contact-form').classList.remove('form-invisible');
  //IE9 support?
});

eventHandler('.contact-form', 'submit', () => closeForm());
eventHandler('.close-form-btn', 'click', () => closeForm());
document.addEventListener('keydown', (event) => {
  if (event.code == 'Escape') {
    closeForm();
  }
});

// desktop - home page tabs and options
var homeOptionsTabs = document.getElementsByClassName("options-box-tab");
var homeOptions = document.getElementsByClassName("options-box-col-section");

Array.from(homeOptionsTabs).forEach((item, index) => {
  item.addEventListener('click', () => {
    Array.from(homeOptionsTabs).forEach((item) => {
      item.classList.remove('active')
    });
    Array.from(homeOptions).forEach((item) => {
      item.classList.remove('active')
    });

    homeOptionsTabs[index].classList.add('active'); /* active for tab */
    homeOptions[index].classList.add('active'); /* active for option section */
  } );
});

// mobile - show-hide home page options
var optionsArrows = document.getElementsByClassName("options-arrow");
var optionsBlocks = document.getElementsByClassName("options-block");
var optionsItems = document.getElementsByClassName("options-box-mob__option-tab");
Array.from(optionsItems).forEach(function(item) {
  item.addEventListener('click', (item) => {
    let tab = item.currentTarget;
    let arrow = tab.querySelector('.options-arrow');

    let parent = tab.parentElement;
    let block = parent.querySelector('.options-block');
      // if active clicked - close it
    if(block.classList.contains('active')){
      arrow.classList.remove('arrow-open');
      block.classList.remove('active');

      // else - regular case
    } else {
      Array.from(optionsBlocks).forEach((item) => {
        item.classList.remove('active')
      });
      Array.from(optionsArrows).forEach((item) => {
        item.classList.remove('arrow-open')
      });  
      
      arrow.classList.add('arrow-open');
      block.classList.add('active');
    }    
  });
});


// show-hide answer on the help page
var qaItems = document.getElementsByClassName("qa-item");
Array.from(qaItems).forEach(function(item) {
  item.addEventListener('click', (item) => {
    item.currentTarget.classList.toggle('active')
    let arrow = item.currentTarget.firstChild
    arrow.classList.toggle('arrow-open')
  });
});

// adds arrows to help pages 
Array.from(qaItems).forEach(function(item) {
  var node = document.createElement("LI"); 
  node.classList.add('arrow')
  item.prepend(node); 
});

// Switch gif image on the Welcome page - DEPRECATED

function closeForm(){
  document.querySelector('.contact-form').classList.add('form-invisible');
  document.querySelector('#expand-form').classList.remove('form-invisible');
}

function showImg(evt, imgId){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-img");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("gif-tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-gif-tab", "");
  }
  document.getElementById(imgId).style.display = "block";
  evt.currentTarget.className += " active-gif-tab";
}

// // show-hide answer on the help page
// var navbarLinks = document.getElementsByClassName("header__link");
// Array.from(navbarLinks).forEach(function(item) {  
//   item.addEventListener('click', changeActiveNavbarLink());
// });

// function changeActiveNavbarLink(){
//   // remove active to all tabs
//   var tabs = document.getElementsByClassName("header__link");
//   Array.from(tabs).forEach(function(tab) {
//     tab.classList.remove('active');
//   });
//   event.currentTarget.classList.add('active')
// }

function changeInterractive(className){
  // remove active to all tabs
  var tabs = document.getElementsByClassName("bottom-container");
  Array.from(tabs).forEach(function(tab) {
    tab.classList.remove('active');
  });
  event.currentTarget.classList.add('active')

  // remove active to all
  var elements = document.getElementsByClassName("feature-interractive");
  Array.from(elements).forEach(function(element) {
    element.classList.remove('active');
  });

  // set active to the clicked
  var activeElements = document.getElementsByClassName(className);
  Array.from(activeElements).forEach(function(element) {
    element.classList.add('active');
  });
}

function changeInterractiveMob(className){  
  // remove active to all
  var elements = document.getElementsByClassName("feature-interractive-mob");
  Array.from(elements).forEach(function(element) {
    element.classList.remove('active');
  });

  // set active to the clicked
  var activeElements = document.getElementsByClassName(className);
  Array.from(activeElements).forEach(function(element) {
    element.classList.add('active');
  });
}

/* SWIPE */

function detectSwipe(el,func) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  var min_x = 20;  //min x swipe for horizontal swipe
  var max_x = 40;  //max x difference for vertical swipe
  var min_y = 40;  //min y swipe for vertical swipe
  var max_y = 50;  //max y difference for horizontal swipe
  var direc = "";
  ele = document.getElementById(el);

  // if element not found
  if(null == ele) return

  ele.addEventListener('touchstart',function(e){
    var t = e.touches[0];
    swipe_det.sX = t.screenX; 
    swipe_det.sY = t.screenY;
  },false);
  ele.addEventListener('touchmove',function(e){
    // e.preventDefault();
    var t = e.touches[0];
    swipe_det.eX = t.screenX; 
    swipe_det.eY = t.screenY;    
  },false);
  ele.addEventListener('touchend',function(e){
    //horizontal detection
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
      if(swipe_det.eX > swipe_det.sX) direc = "r";
      else direc = "l";
    }
    //vertical detection
    // Uncomment if needed
    // commented to detect only horizontal swipe direction
    // if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x)))) {
    //   if(swipe_det.eY > swipe_det.sY) direc = "d";
    //   else direc = "u";
    // }

    if (direc != "") {
      if(typeof func == 'function') func(el,direc);
    }
    direc = "";
    
  },false);  
}


function finishSwipe(el, direction) {
  var maxV = 6
  var minV = 1

  var elements = document.getElementsByClassName("feature-content-mob");

    for (i = 0; i < elements.length; i++){
      let element = elements[i]
    if(element.classList.contains('active')){
      for (i = 0; i < element.classList.length; i++){
        cls = element.classList[i]
        if(cls.startsWith('feature-mob')){
          var elNum = parseInt(cls.slice(-1));
          // if we swipe to the left, activate next slide
          if(direction == 'l'){
            if(elNum < maxV) {
              elNum += 1;
            }
          }
          // if we swipe to the right, activate previouse slide
          if(direction == 'r'){
            if(elNum > minV) {
              elNum -= 1;
            }
          }          
          var newClass = cls.slice(0, -1) + elNum

          changeInterractiveMob(newClass)         
        }
      }
      break;
    }
  }

}

detectSwipe('app-feature-section__mob', finishSwipe);

/* / SWIPE */