// Open the "Receive email updates" address collector.

eventHandler('.sidebar .actions h3', 'click', function(){
  let hiddenForm = document.getElementsByClassName('email-modal');
  hiddenForm[0].style.display = "block";
});

// Close the address collector with no entry.

eventHandler('.close-me', 'click', function(){
  let hiddenForm = document.getElementsByClassName('email-modal');
  hiddenForm[0].style.display = "none";
});

// Close the address collector with no entry via ESC key

eventHandler('document', 'keydown', function(){
  let hiddenForm = document.getElementsByClassName('email-modal')
  if (event.which == 27) 
    hiddenForm[0].style.display = "none";
});

// Switch gif image on the Welcome page

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
