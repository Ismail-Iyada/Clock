//Clock


function currentTime() {
 
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + " : " + mm + " : " + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    timeout1 = setTimeout(function(){ currentTime() }, 1000);


  }


  currentTime();
  



//Timer function
function Timer(){
  clearTimeout(timeout1)


  
  let hh = prompt("How many houres do you want to wait?");
  let mm = prompt("How many minutes do you want to wait?");
  let ss = prompt("How many seconds do you want to wait?");

  let h = hh * 3600 ;
  let m = mm * 60;
  let s = ss * 1 ;
  var time = h + m + s
  repeater = setInterval(timer,1000)
  function timer(){
    if(time>=0){
    const hour = Math.floor(time/3600)
    const mins = Math.floor((time%3600)/(60));
    let seconds = ((time) % (60));
  
    seconds = seconds < 10 ? '0'+seconds : seconds;
  
    console.log(hour+":"+mins+":"+seconds)
    document.getElementById("clock").innerText = hour+":"+mins+":"+seconds;
    time--;}

    else if (time << 0){
      clearInterval(repeater)
      console.log("out of time!")
      document.getElementById("clock").innerText = "out of time!";
      const audio = document.getElementById("timeout");
      audio.volume = 0.5;
      audio.play();
    }

//start countdown from 10 to 0!!

    /*if (time<10){
      const audio1 = document.getElementById("sec");
      audio1.volume = 0.3;
      audio1.play();
    }*/
  
    
  }
 
}

//Alarm function
function Alarm(){



  let ahh = prompt("At what hour do you want the alarm to ring?");
  let amm = prompt("At what minute do you want the alarm to ring?");
 // let ass = 00;


  function alarm(){
    let date = new Date(); 
    let dhh = date.getHours();
    let dmm = date.getMinutes();
    let dss = date.getSeconds();

    if(dhh == 0){
      dhh = 12;
  }
  if(dhh > 12){
      dhh = dhh - 12;
    //  session = "PM";
   }

    //  console.log("tick tock")
   //   console.log(dhh+"\r\n"+dmm+"\r\n"+ahh+"\r\n"+amm)
    if(dhh==ahh && dmm==amm && dss==0){
      const alarm =  document.getElementById("timeout");
      alarm.volume = 1;
      alarm.play()
      console.log("alarm ticking")
    }
    else if (dhh!=ahh && dmm!=amm /*&& dss>10*/){
      const audio = document.getElementById("timeout");
      audio.pause();
    }
    timeout = setTimeout(function(){ alarm() }, 1000);
  }
  alarm()


}



//StopWatch function
function StopWatch(){
  clearTimeout(timeout1)
  let counter = setInterval(Count,1000)
  let sdd = 00;
  let shh = 00;
  let smm = 00;
  let sss = 00;

  function Count(){
      if ( sss < 60){
        sss = sss + 1;
      }
      if (sss == 59){
        sss = 0;
        smm = smm + 1;
      }
      if ( smm == 59 ){
        smm = 0;
        shh = shh + 1;
      }
      if ( shh == 24){
        shh = 0;
        sdd = sdd +1;
      }

      /*sdd = (sdd < 10) ? "0" + sdd : sdd;
      shh = (shh < 10) ? "0" + shh : shh;
      smm = (smm < 10) ? "0" + smm : smm;
      sss = (sss < 10) ? "0" + sss : sss;*/
      document.getElementById("clock").innerText = sdd+":"+shh+":"+smm+":"+sss; 
  }

}




//reset button


function Reset(){
  currentTime()
  const audio = document.getElementById("timeout");
  audio.pause();

}







































