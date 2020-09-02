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

eventHandler('.app-feature-section__bottom.bottom-container', 'click', function(){
console.log('clickedftg');
  // let elems = document.querySelectorAll('.feature-interractive');
  // elems.forEach(element => element.classList.remove('active'))
  
  // console.log(e.target)

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

function someFunc(a){
console.log(a)
}


