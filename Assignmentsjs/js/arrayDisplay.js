var stringArray=new Array();//array defining
function add(){
    var inpt=document.getElementById('student1');
    //alert("add is called");

    
    if(stringArray.length==0){
        stringArray[0]=inpt.value;//checking whether the array is empty
    }else{
        stringArray.push(inpt.value);//if array is not empty  push the added elements
    }

}
function display(){
   // alert("display is called");
    
   // var input=document.getElementsByName('array');
    
for(var i=0;i<stringArray.length;i++){
    document.write(stringArray[i]+"<br>");
}

}