//date object
let d = new Date()


//clocck object
    var Clock = {
        hour : d.getHours(),
        minuts : d.getMinutes(),
        seconds : d.getSeconds(),
        session : "AM",
        ticking : function(){

        }
    };
//timer object
    var Timer = {};
//alarm object
    var Alarm = {};
//stopwatch object
    var StopWatch = {};


console.log(Clock.hour)
