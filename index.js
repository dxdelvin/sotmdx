
// background color changer 


var  button = document.getElementsByClassName("color-changer-button");
var  h2Element = document.getElementById("color-changer-text")
var  bgElement = document.getElementsByClassName('about-sotm');
var bgElement2 = document.getElementsByClassName("video")
button[0].addEventListener("click", () => {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8).toUpperCase();
    console.log(color);
    bgElement[0].style.backgroundColor = color;
    bgElement[1].style.backgroundColor = color;
    bgElement[2].style.backgroundColor = color;
    bgElement2[0].style.backgroundColor = color;
    h2Element.innerHTML = color
    })




var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'
  })