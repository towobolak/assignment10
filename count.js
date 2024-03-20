function submit(){

var dayss = document.getElementById("dayss").val();
var hourss = document.getElementById("hourss").val();
var minutess = document.getElementById("minutess").val();
var secondss = document.getElementById("secondss").val(); 
var date = document.querySelectorAll('#dayss, #hourss, #minutess, #secondss');

document.getElementById("dayss").style.display = "none";
document.getElementById("hourss").style.display = "none";
document.getElementById("minutess").style.display = "none";
document.getElementById("secondss").style.display = "none";

document.getElementById("daysss").style.display = "block";
document.getElementById("hoursss").style.display = "block";
document.getElementById("minutesss").style.display = "block";
document.getElementById("secondsss").style.display = "block";


var countDownDate = new Date("date").getTime();

var x = setInterval(function() {

 var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("daysss").innerHTML = days ;

  document.getElementById("hoursss").innerHTML = hours ;

  document.getElementById("minutesss").innerHTML = minutes ;

  document.getElementById("secondsss").innerHTML = seconds ;
    
  if (distance < 0) {
    clearInterval(x);

    document.getElementById("daysss").innerHTML = "0" ;

    document.getElementById("hoursss").innerHTML = "0" ;
  
    document.getElementById("minutesss").innerHTML = "0" ;
  
    document.getElementById("secondsss").innerHTML = "0" ;
  }

}, 1000);







}


