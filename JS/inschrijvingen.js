var countDownDate_spaghettiavond = new Date("Nov 14, 2023 18:00:00").getTime();
var countDownDate_eetfestijn = new Date("Mar 17, 2023 18:30:00").getTime();
var countDownDate_zwemnamiddag = new Date("Nov 14, 2023 18:00:00").getTime();
var countDownDate_streekbierenquiz = new Date("Nov 14, 2023 18:00:00").getTime();
var countDownDate_kubbtornooi = new Date("Nov 14, 2023 18:00:00").getTime();
var countDownDate_ledenBBQ = new Date("Mar 17, 2023 18:30:00").getTime();
var countDownDate_kampBBQ = new Date("Nov 14, 2023 18:00:00").getTime();


var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft_spaghettiavond = countDownDate_spaghettiavond - now;
    var timeleft_eetfestijn = countDownDate_eetfestijn - now;
    var timeleft_zwemnamiddag = countDownDate_zwemnamiddag - now;
    var timeleft_streekbierenquiz = countDownDate_streekbierenquiz - now;
    var timeleft_kubbtornooi = countDownDate_kubbtornooi - now;
    var timeleft_ledenBBQ = countDownDate_ledenBBQ - now;
    var timeleft_kampBBQ = countDownDate_kampBBQ - now;
    
    var days_spaghettiavond = Math.floor(timeleft_spaghettiavond / (1000 * 60 * 60 * 24));
    var hours_spaghettiavond = Math.floor((timeleft_spaghettiavond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_spaghettiavond = Math.floor((timeleft_spaghettiavond % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_spaghettiavond = Math.floor((timeleft_spaghettiavond % (1000 * 60)) / 1000);

    var days_eetfestijn= Math.floor(timeleft_eetfestijn / (1000 * 60 * 60 * 24));
    var hours_eetfestijn = Math.floor((timeleft_eetfestijn % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_eetfestijn = Math.floor((timeleft_eetfestijn % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_eetfestijn = Math.floor((timeleft_eetfestijn % (1000 * 60)) / 1000);

    var days_zwemnamiddag = Math.floor(timeleft_zwemnamiddag / (1000 * 60 * 60 * 24));
    var hours_zwemnamiddag = Math.floor((timeleft_zwemnamiddag % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_zwemnamiddag = Math.floor((timeleft_zwemnamiddag % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_zwemnamiddag = Math.floor((timeleft_zwemnamiddag % (1000 * 60)) / 1000);

    var days_streekbierenquiz = Math.floor(timeleft_streekbierenquiz / (1000 * 60 * 60 * 24));
    var hours_streekbierenquiz = Math.floor((timeleft_streekbierenquiz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_streekbierenquiz = Math.floor((timeleft_streekbierenquiz % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_streekbierenquiz = Math.floor((timeleft_streekbierenquiz % (1000 * 60)) / 1000);

    var days_kubbtornooi = Math.floor(timeleft_kubbtornooi / (1000 * 60 * 60 * 24));
    var hours_kubbtornooi = Math.floor((timeleft_kubbtornooi % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_kubbtornooi = Math.floor((timeleft_kubbtornooi % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_kubbtornooi = Math.floor((timeleft_kubbtornooi % (1000 * 60)) / 1000);

    var days_ledenBBQ = Math.floor(timeleft_ledenBBQ / (1000 * 60 * 60 * 24));
    var hours_ledenBBQ = Math.floor((timeleft_ledenBBQ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_ledenBBQ = Math.floor((timeleft_ledenBBQ % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_ledenBBQ = Math.floor((timeleft_ledenBBQ % (1000 * 60)) / 1000);

    var days_kampBBQ = Math.floor(timeleft_kampBBQ / (1000 * 60 * 60 * 24));
    var hours_kampBBQ = Math.floor((timeleft_kampBBQ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_kampBBQ = Math.floor((timeleft_kampBBQ % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_kampBBQ = Math.floor((timeleft_kampBBQ % (1000 * 60)) / 1000);

    document.getElementById("days_spaghettiavond").innerHTML = days_spaghettiavond + "d "
    document.getElementById("hours_spaghettiavond").innerHTML = hours_spaghettiavond + "h " 
    document.getElementById("mins_spaghettiavond").innerHTML = minutes_spaghettiavond + "m " 
    document.getElementById("secs_spaghettiavond").innerHTML = seconds_spaghettiavond + "s"

    document.getElementById("days_eetfestijn").innerHTML = days_eetfestijn + "d "
    document.getElementById("hours_eetfestijn").innerHTML = hours_eetfestijn + "h " 
    document.getElementById("mins_eetfestijn").innerHTML = minutes_eetfestijn + "m " 
    document.getElementById("secs_eetfestijn").innerHTML = seconds_eetfestijn + "s"

    document.getElementById("days_zwemnamiddag").innerHTML = days_zwemnamiddag + "d "
    document.getElementById("hours_zwemnamiddag").innerHTML = hours_zwemnamiddag + "h " 
    document.getElementById("mins_zwemnamiddag").innerHTML = minutes_zwemnamiddag + "m " 
    document.getElementById("secs_zwemnamiddag").innerHTML = seconds_zwemnamiddag + "s"

    document.getElementById("days_streekbierenquiz").innerHTML = days_streekbierenquiz + "d "
    document.getElementById("hours_streekbierenquiz").innerHTML = hours_streekbierenquiz + "h " 
    document.getElementById("mins_streekbierenquiz").innerHTML = minutes_streekbierenquiz + "m " 
    document.getElementById("secs_streekbierenquiz").innerHTML = seconds_streekbierenquiz + "s"

    document.getElementById("days_kubbtornooi").innerHTML = days_kubbtornooi + "d "
    document.getElementById("hours_kubbtornooi").innerHTML = hours_kubbtornooi + "h " 
    document.getElementById("mins_kubbtornooi").innerHTML = minutes_kubbtornooi + "m " 
    document.getElementById("secs_kubbtornooi").innerHTML = seconds_kubbtornooi + "s"

    document.getElementById("days_ledenBBQ").innerHTML = days_ledenBBQ + "d "
    document.getElementById("hours_ledenBBQ").innerHTML = hours_ledenBBQ + "h " 
    document.getElementById("mins_ledenBBQ").innerHTML = minutes_ledenBBQ + "m " 
    document.getElementById("secs_ledenBBQ").innerHTML = seconds_ledenBBQ + "s"

    document.getElementById("days_kampBBQ").innerHTML = days_kampBBQ + "d "
    document.getElementById("hours_kampBBQ").innerHTML = hours_kampBBQ + "h " 
    document.getElementById("mins_kampBBQ").innerHTML = minutes_kampBBQ + "m " 
    document.getElementById("secs_kampBBQ").innerHTML = seconds_kampBBQ + "s"


}, 1000)