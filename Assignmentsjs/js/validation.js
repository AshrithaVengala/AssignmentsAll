document.getElementById("browser").innerHTML=navigator.appName;//navigator object gives browser related info
function writer(){
var flg=document.getElementById("reading").checked;//if reading checkbox is cheked
if(flg==true){
    document.getElementById("writer").innerHTML="<td><label for='writer'>Favourite Writer</label></td> <td><input type='text'></td>";//addthe html elements into columns
}
}
function time(){
    

}
function validate(){
    var fName=document.getElementById("fname");// to get the elements
    var lName=document.getElementById("lname");
    var email=document.getElementById("email");
    var DOB=document.getElementById("dob");
    var errfname= document.getElementById('errorFname');// to get error box elements to dislay the hint
    var errlname= document.getElementById('errorLname');
    var errEmail= document.getElementById('errorEmail');
    var errDate= document.getElementById('errorDate');
    if(fName.value=="" ||(fName.value.match("![a-zA-Z]"))){
        fName.style.border=" 3px solid  red";// to make the input box border red
        errfname.innerHTML= "firstname";
        return false;
    }else if(lName.value=="" || !(lName.value.match("[a-zA-Z]"))){
         
       lName.style.border=" 3px solid  red";
       errlname.innerHTML="last name";
       return false;
    }else if( email.value=="" || !(email.value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"))){ //"^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
          email.style.border=" 3px solid  red";
        errEmail.innerHTML="example@domain.com";
        return false;
       

    }else if( DOB.value="" || !(DOB.value.match("^([0]?[1-9]|[1|2][0-9]|[3][0|1])-([0]?[1-9]|[1][0-2])-([0-9]{4}|[0-9]{2})$")))
    {
        errDate.innerText="(dd-mm-yyyy)";
       DOB.style.border=" 3px solid  red";

        return false;  

    }else{
        return true;
    }

    
}

