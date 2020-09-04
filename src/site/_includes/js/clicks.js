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

// Close the address collector with no entry via ESC key

eventHandler('document', 'keydown', function(){
  let hiddenForm = document.getElementsByClassName('email-modal')
  if (event.which == 27) 
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

function changeInterractive(className){
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
  console.log(className)
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



function detectswipe(el,func) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  var min_x = 20;  //min x swipe for horizontal swipe
  var max_x = 4000;  //max x difference for vertical swipe
  var min_y = 40;  //min y swipe for vertical swipe
  var max_y = 50;  //max y difference for horizontal swipe
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
    var t = e.touches[0];
    swipe_det.sX = t.screenX; 
    swipe_det.sY = t.screenY;
  },false);
  ele.addEventListener('touchmove',function(e){
    e.preventDefault();
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
    if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x)))) {
      if(swipe_det.eY > swipe_det.sY) direc = "d";
      else direc = "u";
    }

    if (direc != "") {
      if(typeof func == 'function') func(el,direc);
    }
    direc = "";
  },false);  
}

function myfunction(el,direction) {
  var elements = document.getElementsByClassName("feature-content-mob");
  Array.from(elements).forEach(function(element) {
    if(element.classList.contains('active')){
      Array.from(element.classList).forEach(function(cls) {
        if(cls.startsWith('feature-mob')){
          var elNum = parseInt(cls.slice(-1));
          elNum += 1;
          var newClass = cls.slice(0, -1) + elNum
          // console.log(newClass)
          changeInterractiveMob(newClass)
          // sleep(1000);
        }
      })
    }
  });

  if(direction == 'l'){
    
  }
  if(direction == 'r'){

  }
  console.log(el, direction)
}



detectswipe('app-feature-section__mob',myfunction);