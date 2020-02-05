
 let enjoy = confirm("Enjoy your shopping!");

 //alert( enjoy ); // true if OK is pressed


var babyGender= prompt("what is your baby gender?");
console .log(babyGender);
var section1;
if(babyGender == 'Girl'){
    section1='Girle section';

}
else if(babyGender == 'Boy'){
    section1='Boy section';
}

else{
    section1='Both section';

}
document.write('<h3>'+section1+'</h3>');




var Age= prompt("what is your baby age?");
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



/////////////////////////////////
var brand = prompt("Please enter your favorite brand", "zara kids");
   document.write("Enjoy your shopping in " + brand + " "+"brand section");
   if (brand != null) {
     document.getElementById("demo").innerHTML =
     "Enjoy your shopping in " + brand + " "+"brand section";
   }


   ///////////////////////////////

   
  
   
 
//////////////////////////////////////////////////////////
//function myFunction() {
      
   

   


////////////////////////////////////////////////
//function order(Age){

  //var Age= prompt("what do you want to order? clothes or ho")
//function addAge(Age){

//console .log(Age);
//var section;
//if(Age>=3 && Age<12){
 //   section='Children section';

//}
//else if(Age>=0 && Age<3){
  //  section='newborn section';
//}

//else{
  //  section='Not available';

//}
//return section;
//}
//var Age= prompt("what is your baby age?")  // we can here change the name of var ex: age5
//document.write('<h3>'+addAge(Age)+'</h3>'); // we should but the same name , age5 , we can call the function in HTML also




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
      
   // var person = prompt("Please enter your baby name", "ahmad");
    //document.write("Hello " + person + "  "+"mommy ! How are you today?");
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