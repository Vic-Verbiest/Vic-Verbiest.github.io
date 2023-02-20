var countDownDate_spaghettiavond = new Date("Mar 14, 2023 18:00:00").getTime();
var countDownDate_eetfestijn = new Date("Jun 17, 2023 18:30:00").getTime();
var countDownDate_zwemnamiddag = new Date("Nov 14, 2023 18:00:00").getTime();
var countDownDate_streekbierenquiz = new Date("Nov 14, 2023 18:00:00").getTime();
var countDownDate_kubbtornooi = new Date("Nov 14, 2023 18:00:00").getTime();
var countDownDate_ledenBBQ = new Date("Nov 15, 2023 18:30:00").getTime();
var countDownDate_kampBBQ = new Date("Nov 14, 2023 18:00:00").getTime();

var timer_1s = setInterval(function() {
    var now = new Date().getTime();

    
    var timeleft_spaghettiavond = countDownDate_spaghettiavond - now;
    var timeleft_eetfestijn = countDownDate_eetfestijn - now;
    var timeleft_zwemnamiddag = countDownDate_zwemnamiddag - now;
    var timeleft_streekbierenquiz = countDownDate_streekbierenquiz - now;
    var timeleft_kubbtoernooi = countDownDate_kubbtornooi - now;
    var timeleft_ledenBBQ = countDownDate_ledenBBQ - now;
    var timeleft_kampBBQ = countDownDate_kampBBQ - now;
    
    var days_spaghettiavond = Math.floor(timeleft_spaghettiavond / (1000 * 60 * 60 * 24));
    var hours_spaghettiavond = Math.floor((timeleft_spaghettiavond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_spaghettiavond = Math.floor((timeleft_spaghettiavond % (1000 * 60 * 60)) / (1000 * 60));

    var days_eetfestijn= Math.floor(timeleft_eetfestijn / (1000 * 60 * 60 * 24));
    var hours_eetfestijn = Math.floor((timeleft_eetfestijn % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_eetfestijn = Math.floor((timeleft_eetfestijn % (1000 * 60 * 60)) / (1000 * 60));

    var days_zwemnamiddag = Math.floor(timeleft_zwemnamiddag / (1000 * 60 * 60 * 24));
    var hours_zwemnamiddag = Math.floor((timeleft_zwemnamiddag % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_zwemnamiddag = Math.floor((timeleft_zwemnamiddag % (1000 * 60 * 60)) / (1000 * 60));

    var days_streekbierenquiz = Math.floor(timeleft_streekbierenquiz / (1000 * 60 * 60 * 24));
    var hours_streekbierenquiz = Math.floor((timeleft_streekbierenquiz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_streekbierenquiz = Math.floor((timeleft_streekbierenquiz % (1000 * 60 * 60)) / (1000 * 60));

    var days_kubbtoernooi = Math.floor(timeleft_kubbtoernooi / (1000 * 60 * 60 * 24));
    var hours_kubbtoernooi = Math.floor((timeleft_kubbtoernooi % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_kubbtoernooi = Math.floor((timeleft_kubbtoernooi % (1000 * 60 * 60)) / (1000 * 60));

    var days_ledenBBQ = Math.floor(timeleft_ledenBBQ / (1000 * 60 * 60 * 24));
    var hours_ledenBBQ = Math.floor((timeleft_ledenBBQ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_ledenBBQ = Math.floor((timeleft_ledenBBQ % (1000 * 60 * 60)) / (1000 * 60));

    var days_kampBBQ = Math.floor(timeleft_kampBBQ / (1000 * 60 * 60 * 24));
    var hours_kampBBQ = Math.floor((timeleft_kampBBQ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_kampBBQ = Math.floor((timeleft_kampBBQ % (1000 * 60 * 60)) / (1000 * 60));

    if(document.getElementById("main_inschrijvingen")){
        document.getElementById("timeleft_spaghettiavond").innerHTML = days_spaghettiavond + "d " + hours_spaghettiavond + "h " + minutes_spaghettiavond + "m ";
        document.getElementById("timeleft_eetfestijn").innerHTML = days_eetfestijn + "d " + hours_eetfestijn + "h " + minutes_eetfestijn + "m ";
        document.getElementById("timeleft_zwemnamiddag").innerHTML = days_zwemnamiddag + "d " + hours_zwemnamiddag + "h " + minutes_zwemnamiddag + "m ";
        document.getElementById("timeleft_streekbierenquiz").innerHTML = days_streekbierenquiz + "d " + hours_streekbierenquiz + "h " + minutes_streekbierenquiz + "m ";
        document.getElementById("timeleft_kubbtoernooi").innerHTML = days_kubbtoernooi + "d " + hours_kubbtoernooi + "h " + minutes_kubbtoernooi + "m ";
        document.getElementById("timeleft_ledenBBQ").innerHTML = days_ledenBBQ + "d " + hours_ledenBBQ + "h " + minutes_ledenBBQ + "m ";
        document.getElementById("timeleft_kampBBQ").innerHTML = days_kampBBQ + "d " + hours_kampBBQ + "h " + minutes_kampBBQ + "m ";
    }
    if(document.getElementById("main_home")){
        let times=new Array(7);
        times[0]=timeleft_spaghettiavond;
        times[1]=timeleft_eetfestijn;
        times[2]=timeleft_zwemnamiddag;
        times[3]=timeleft_streekbierenquiz;
        times[4]=timeleft_kubbtoernooi;
        times[5]=timeleft_ledenBBQ;
        times[6]=timeleft_kampBBQ;

        let events=new Array(7);
        events[0]="spaghttiavond";
        events[1]="eetfestijn";
        events[2]="zwemnamiddag";
        events[3]="streekbierenquiz";
        events[4]="kubbtoernooi";
        events[4]="ledenBBQ";
        events[5]="kampBBQ";

        var event1=times[5];
        var event2=times[6];
        var teller=0;
        times.forEach(element => {
            if(element<event2){
                 if(element<event1){
                    event2=event1;
                    event1=element
                }
                else{
                    event2=element;
                }
            }
            teller++;
        });

        document.getElementById("event1").innerHTML=events[times.indexOf(event1)];
        document.getElementById("event2").innerHTML=events[times.indexOf(event2)];
        document.getElementById("event1").href="./inschrijvingen.html#"+ events[times.indexOf(event1)];
        document.getElementById("event2").href="./inschrijvingen.html#"+ events[times.indexOf(event2)];

        switch(times.indexOf(event1)){
            case 0:document.getElementById("date_event1").innerHTML= days_spaghettiavond + "d " + hours_spaghettiavond + "h " + minutes_spaghettiavond + "m "; break;
            case 1:document.getElementById("date_event1").innerHTML= days_eetfestijn + "d " + hours_eetfestijn + "h " + minutes_eetfestijn + "m "; break;
            case 2:document.getElementById("date_event1").innerHTML= days_zwemnamiddag + "d " + hours_zwemnamiddag + "h " + minutes_zwemnamiddag + "m "; break;
            case 3:document.getElementById("date_event1").innerHTML= days_streekbierenquiz + "d " + hours_streekbierenquiz + "h " + minutes_streekbierenquiz + "m "; break;
            case 4:document.getElementById("date_event1").innerHTML= days_kubbtoernooi + "d " + hours_kubbtoernooi + "h " + minutes_kubbtoernooi + "m "; break;
            case 5:document.getElementById("date_event1").innerHTML= days_ledenBBQ + "d " + hours_ledenBBQ + "h " + minutes_ledenBBQ + "m "; break;
            case 6:document.getElementById("date_event1").innerHTML= days_kampBBQ + "d " + hours_kampBBQ + "h " + minutes_kampBBQ + "m "; break;
        }
        switch(times.indexOf(event2)){
            case 0:document.getElementById("date_event2").innerHTML= days_spaghettiavond + "d " + hours_spaghettiavond + "h " + minutes_spaghettiavond + "m "; break;
            case 1:document.getElementById("date_event2").innerHTML= days_eetfestijn + "d " + hours_eetfestijn + "h " + minutes_eetfestijn + "m "; break;
            case 2:document.getElementById("date_event2").innerHTML= days_zwemnamiddag + "d " + hours_zwemnamiddag + "h " + minutes_zwemnamiddag + "m "; break;
            case 3:document.getElementById("date_event2").innerHTML= days_streekbierenquiz + "d " + hours_streekbierenquiz + "h " + minutes_streekbierenquiz + "m "; break;
            case 4:document.getElementById("date_event2").innerHTML= days_kubbtoernooi + "d " + hours_kubbtoernooi + "h " + minutes_kubbtoernooi + "m "; break;
            case 5:document.getElementById("date_event2").innerHTML= days_ledenBBQ + "d " + hours_ledenBBQ + "h " + minutes_ledenBBQ + "m "; break;
            case 6:document.getElementById("date_event2").innerHTML= days_kampBBQ + "d " + hours_kampBBQ + "h " + minutes_kampBBQ + "m "; break;
        }
        
    }
}, 2000)











