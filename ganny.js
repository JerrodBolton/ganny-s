alert(" Welcome to Granny's Kitchen ");

function food() {
  var food = prompt(" what is your favorite food ");
  // document.write();
  document.getElementById("welcome").innerHTML =
    " Hey welcome " + food + " lover thank you for being here!";
}

var Soulfood;
while (Soulfood != "yes") {
  Soulfood = prompt("Do you like soul food?, yes or no?");
}

// What are dome ideas that you want to do with your javascript.

function checkweight(){
  let weight = prompt ("How much do you weight");
  if ( weight > 150 ) {//then
      
    alert(" Your to fat to be here go away"); //then


     
  }
}


checkweight();