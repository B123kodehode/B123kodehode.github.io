var buttons = document.getElementsByClassName("myButton");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    alert("Button was clicked!");
  });
}
