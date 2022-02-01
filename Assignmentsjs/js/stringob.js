var companyName="Cybage software Pvt Ltd";
var nameArray=Array.from(companyName);//converting companyName into array
var str=prompt("enter a character");
function message(){
    for(var i=0;i<nameArray.length;i++){
        if(str.toLowerCase()==nameArray[i].toLowerCase()){//converting the companyName and given character into lower case
           return document.write("character "+str+" is "+"found at position "+i);
        }
        }
      return  document.write("character"+str+" is not found");
    }
    message();

   var addedString= companyName.concat("is popularly known as Cybage Software")
    document.write("<br> "+ addedString);
    document.write("<br>"+companyName.toLowerCase());
    document.write("<br>"+companyName.toUpperCase());
    