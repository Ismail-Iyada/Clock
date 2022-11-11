//date object
let d = new Date()

    var date = {
        hour : d.getHours(),
        minuts : d.getMinutes(),
        seconds : d.getSeconds(),
        session : "AM",
        fullFormat : function(){

            if(this.session == "PM"){
                this.hour = this.hour +++ 12;
            }
            if(this.hour == 24){
                this.hour = 0;
            }
            //const aa = a.toString(10)
            var h = this.hour;
            var m = this.minuts;
            var s = this.seconds;

            var sh = h.toString(10);
            var sm = m.toString(10);
            var ss = s.toString(10);

            var shl = sh.length;
            var sml = sm.length;
            var ssl = ss.length;

            //console.log(`${aa.length}`)

            this.hour = (this.hour < 10 && shl == 1) ? "0" + this.hour : this.hour;
            this.minuts = (this.minuts < 10 && sml == 1) ? "0" + this.minuts : this.minuts;
            this.seconds = (this.seconds < 10 && ssl == 1) ? "0" + this.seconds : this.seconds;
            console.log(this.hour+":"+this.minuts+":"+this.seconds);
        },
        halfFormate : function(){

            if(this.hour == 0){
                this.hour = 12;
            }
            if(this.hour > 12){
                this.hour = this.hour - 12;
                this.session = "PM";
            }

            //const aa = a.toString(10)
            var h = this.hour;
            var m = this.minuts;
            var s = this.seconds;

            var sh = h.toString(10);
            var sm = m.toString(10);
            var ss = s.toString(10);

            var shl = sh.length;
            var sml = sm.length;
            var ssl = ss.length;

            //console.log(`${aa.length}`)

            this.hour = (this.hour < 10 && shl == 1) ? "0" + this.hour : this.hour;
            this.minuts = (this.minuts < 10 && sml == 1) ? "0" + this.minuts : this.minuts;
            this.seconds = (this.seconds < 10 && ssl == 1) ? "0" + this.seconds : this.seconds;
            console.log(this.hour+":"+this.minuts+":"+this.seconds+" "+this.session);
        },
    }


//clocck object
    var Clock = {
        session : "AM",
        sessionCheck : function(){
            if(this.hour == 0){
                this.hour = 12;
            }
            if(this.hour > 12){
                this.hour = this.hour - 12;
                this.session = "PM";
             }
             return this.hour, this.session;
        },
        ticking : function(){
            console.log(date.hour,date.minuts,date.seconds)
        }
    };
//timer object
    var Timer = {};
//alarm object
    var Alarm = {};
//stopwatch object
    var StopWatch = {};


        date.fullFormat()
        date.halfFormate()
        console.log(date.session)


        //change