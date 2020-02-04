

var Age= prompt("what is your baby age?")
console .log(Age);
var section;
if(Age>=3 && Age<12){
    section='Children section';

}
else if(Age>=0 && Age<3){
    section='newborn section';
}

else{
    section='Not available';

}
document.write('<h3>'+section+'</h3>');



function myFunction() {
   // var person = prompt("www.Online-shopping.com wants to");
    var txt;
    if (confirm("show notifications")) {
      txt = "allow";
    } else {
      txt = "block";
    }
    document.getElementById("demo").innerHTML = txt;

  }


  //function myFunction() {
      
    var person = prompt("Please enter your baby name", "ahmad");
    document.write("Hello " + person + "  "+"mommy ! How are you today?");
    //if (person != null) {
      //document.getElementById("demo").innerHTML =
      //"Hello " + person + "mommy ! How are you today?";
    //}
  //}


  
//if(x>y) {
 //alert("Hello World");
//} 
//else
//{
 //alert("Goodbye");
//}