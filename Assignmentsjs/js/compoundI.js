var p=prompt("enter the  principal value");//principal
var r=prompt("enter the rate of intrest");//intrest
var n=prompt("enter the period of years");//years forintrest to be calculated
var ci=p*(1+(Math.pow((r/100),n)))-p ; //formila for compoundintrest
document.write("compound intrest is "+ci);// display result on the page
