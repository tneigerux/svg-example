// Open the "Receive email updates" address collector.

clickHandler('.sidebar .actions h3', function(){
  let hiddenForm = document.getElementsByClassName('email-modal');
  hiddenForm[0].style.display = "block";
});

// Close the address collector with no entry.

clickHandler('.close-me', function(){
  let hiddenForm = document.getElementsByClassName('email-modal');
  hiddenForm[0].style.display = "none";
});
