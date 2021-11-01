// Countdown to Christmas 2021
var countDownDate = new Date("Dec 25, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";


// If the count down is finished, write some text
if (distance < 0) {
    clearInterval(x);
    document.getElementById("weeks").innerHTML = "Sorry, Christmas is over";
    document.getElementById("days").innerHTML = "Sorry, Christmas is over";
    document.getElementById("hours").innerHTML = "Sorry, Christmas is over";
  }
}, 1000);