var dt=document.getElementById('date').innerHTML=Date();//Date() will  give standard current date
var dateTime=new Date();// new Date() will  give standard current date
var time=document.getElementById('wish').innerHTML=dateTime.getHours();//to get only hours in datetime
if(time<12){
    document.write("Good Morning !!!")

}else if(time>=12 && time<=17){
    document.write("Good Afternoon !!!");

}else{
    document.write("Good Evening !!!");

}