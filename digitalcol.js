function clock(){
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var day=date.getDay()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>12)
        {
            hh=hh-12;
        }
    }
    if(hh==0)
    {
        hh=12
    }
    if(mm==0)
    {
        mo="Jan"
    }
    else if(mm==1)
    {
        mo="Feb"
    }
    else if(mm==2)
    {
        mo="Mar"
    }
    else if(mm==3)
    {
        mo="Arp"
    }
    else if(mm==4)
    {
        mo="May"
    }
    else if(mm==5)
    {
        mo="Jun"
    }
    else if(mm==6)
    {
        mo="Jul"
    }
    else if(mm==7)
    {
        mo="Aug"
    }
    else if(mm==8)
    {
        mo="Spe"
    }
    else if(mm==9)
    {
        mo="Oct"
    }
    else if(mm==10)
    {
        mo="Nov"
    }
    else
    {
        mo="Dec"
    }
    switch(day)
    {
        case 0:day="Sunday"
        document.body.style.backgroundImage="url(./sun.jpg)"
        break;
        case 1:day="Monday"
        document.body.style.backgroundImage="url(./mon.jpg)"
        break;
        case 2:day="Tuesday"
        document.body.style.backgroundImage="url(./tue.jpg)"
        break;
        case 3:day="Wednesday"
        document.body.style.backgroundImage="url(./wed.jpg)"
        break;
        case 4:day="Thursday"
        document.body.style.backgroundImage="url(./thur.jpg)"
        break;
        case 5:day="Friday"
        document.body.style.backgroundImage="url(./fri.jpg)"
        break;
        case 6:day="Saturday"
        document.body.style.backgroundImage="url(./sat.jpg)"
        break;
    }
    console.log(day)
    document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`
    document.getElementById("date").innerHTML=`${dd}/${mo}/${yy}`
    document.getElementById("day").innerHTML=day
    document.getElementById("sec").innerHTML=ss
    setTimeout(clock,1000)
}
clock()
var audio=new Audio()
audio.src="./alram.mp3"
function alarmFunction()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>12)
        {
            hh=hh-12;
        }
    }
    if(hh==0)
    {
        hh=12
    }
    var userGivenhh=document.getElementById("userHours").value
    var userGivenmm=document.getElementById("userMin").value
    var userGivenam_pm=document.getElementById("userAm_Pm").value
    console.log(hh,mm,am_pm)
    console.log(userGivenhh,userGivenmm,userGivenam_pm)
    if(hh==userGivenhh && mm==userGivenmm && am_pm==userGivenam_pm)
    {
        audio.play()
        audio.loop=Infinity
    }
    else{
        audio.pause
    }
    setTimeout(alarmFunction,1000)
}
function closeWindow()
{
    document.getElementById("alarmContainer").style.display="none"
}
function openWindow()
{
    document.getElementById("alarmContainer").style.display="flex"
}