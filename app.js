//clock
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 

var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function date(){
    var date = new Date();

var hrs = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
    if(hrs > 12){
        document.getElementById('check').innerHTML = "PM";
    }else{
        document.getElementById('check').innerHTML = "AM";
    }
    if(hrs > 12){
        hrs = hrs - 12;
    }else{
	    hrs = 12;
    }
    if(hrs < 10){
        hrs = "0"+hrs;
    }
    if(min < 10){
        min = "0"+min;
        
    }
    if(sec < 10){
        sec = "0"+sec;
    }
document.getElementById('hrs').innerHTML = hrs;
document.getElementById('min').innerHTML = min;
document.getElementById('sec').innerHTML = sec;
    
var d = date.getDay();
var m = date.getMonth();
var y = date.getFullYear();

var full_date = dayNames[d]+","+" "+date.getDate()+" "+monthNames[m]+","+" "+y;
    document.getElementById('date').innerHTML = full_date;
}
setInterval(date, 1000);
//clock ends



//typing effect

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor2");

const textArray = ["David Fola", "a Developer,👨‍💻", "a Designer,", "a Tech Enthusiast!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
// Typing ends


 // custom cursor
 const cursor = document.querySelector('.cursor');
 window.onmousemove = (e) => {
     cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px; z-index: 200000000;`)    
 }   


 



