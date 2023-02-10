
var t=0;
var scrol = setInterval(function() {
    if(t==6){t=0}
    else{t+=1}
    document.getElementById("pic_kamp").src="./pictures/kamp/"+ t +".jpg";
    document.getElementById("pic_weekend").src="./pictures/weekend/"+ t +".jpg";
}, 2000)