/*function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
 //   document.getElementById("clock").innerText = time; 
 console.log(time)  
 var t = setTimeout(function(){ currentTime() }, 1000); 
 clearTimeout(t)
}
  
  currentTime();*/


  /*
// Set the date we're counting down to
var countDownDate = new Date("oct 3, 2022 3:41:00").getTime();

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
    
  // Output the result in an element with id="demo"
 console.log(days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ");
    
  // If the count down is over, write some text 
 if (distance < 0) {
    clearInterval(x);
    console.log("EXPIRED");
  }
}, 1000);


*/

/*

var hh = 0;
var mm = 0;
var ss = 5;

var h = hh * 60 * 60 ;
var m = mm * 60;
var s = ss ;
var time = (h+m+s) * 1000;

*/



/*console.log("hour: "+hh+"h      or "+h+"ms");
console.log("minutes: "+mm+"min      or "+m+"ms");
console.log("seconds: "+ss+"s      or "+s+"ms");
console.log("total time in ms: "+time);*/

/*

var repeater = setInterval(timer,1000)
function timer(){

  if(time>=0){
  const hour = Math.floor(time / (1000 * 60 * 60));
  const mins =  Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time) / 1000);

  seconds = seconds < 10 ? '0'+seconds : seconds;

  console.log(hour+":"+mins+":"+seconds)
  time--;}
  else if (time < 0){
    clearInterval(repeater)
    console.log("out of time!")
  }
}
*/
/*
  while ( s > 0 && m > 0 && h > 0 ){
    s-=1
    if (s==0 && m > 0)
  }
*/

var date = new date();

const clock = {

  hh : this.date.getHours(),
  mm : this.date.getMinutes(),
  ss : this.date.getSeconds(),
  session : "AM",

  currentTime : function() {
 

    if(this.hh == 0){
        this.hh = 12;
    }
    if(this.hh > 12){
        this.hh = this.hh - 12;
        this.session = "PM";
     }
  
     this.hh = (this.hh < 10) ? "0" + this.hh : this.hh;
     this.mm = (this.mm < 10) ? "0" + this.mm : this.mm;
     this.ss = (this.ss < 10) ? "0" + this.ss : this.ss;
      
     let time = this.hh + ":" + this.mm + ":" + this.ss + " " + this.session;
  
    document.getElementById("clock").innerText = this.time; 
    timeout1 = setTimeout(function(){ currentTime() }, 1000);
  
  
  }

}
 clock.date