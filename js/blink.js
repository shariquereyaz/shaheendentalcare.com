$(document).ready(function(){
    blink();
 });	 

function blink(){
var date=new Date();
var day=date.getDay();
console.log("day is "+day);
var time=new Date();
 
time=time.getHours();
console.log("time is "+time);
//alert(day);

if(day>=1 && day<=5)
{
    if(time>=9 && time<=21)
    {
       $(".open-blink").css("background-color", "yellow");//#4caf50
        console.log("We are working-OPEN");
    }
  

}
else if(day==6 || day==7)
{
      if(time>=10 && time<=17)
    {
       $(".open-blink").css("background-color", "yellow");//#4caf50
        console.log("It's Weekend-OPEN");
    }
}
    
else{
    
    //var blink=document.getElementsByClassName(".open-blink");
    $(".open-blink").css("background-color", "red");
    console.log("CLOSED"); 
} 
}