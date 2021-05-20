document.addEventListener("DOMContentLoaded", () => {
    alert("DOM построен")
})
var currentTime = new Date().getHours();
function timeCheck() {
    if (currentTime > 19 || currentTime < 9) {
        document.documentElement.classList.add('night')
    }
}
timeCheck();

function clockTimer()
{
    var date = new Date();

    var time = [date.getHours(),date.getMinutes(),date.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|
    var dayOfWeek = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
    var days = date.getDay();

    if(time[0] < 10){time[0] = "0"+ time[0];}
    if(time[1] < 10){time[1] = "0"+ time[1];}
    if(time[2] < 10){time[2] = "0"+ time[2];}

    var current_time = [time[0],time[1],time[2]].join(':');
    var clock = document.getElementById("clock");
    var day = document.getElementById("dayOfWeek");

    clock.innerHTML = current_time;
    day.innerHTML = dayOfWeek[days];

    setTimeout("clockTimer()", 1000);
}
var lastResFind="";
var copy_page="";
function TrimStr(s) {
    s = s.replace( /^\s+/g, '');
    return s.replace( /\s+$/g, '');
}

function FindOnPage(inputId) {
    var obj = window.document.getElementById(inputId);
    var textToFind;

    if (obj) {
        textToFind = TrimStr(obj.value);
    } else {
        alert("Введенная фраза не найдена");
        return;
    }
    if (textToFind == "") {
        alert("Вы ничего не ввели");
        return;
    }

    if(copy_page.length>0)
        document.body.innerHTML=copy_page;
    else copy_page=document.body.innerHTML;

    document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");
    document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>");
    lastResFind=textToFind;
    window.location = '#'+textToFind;
}