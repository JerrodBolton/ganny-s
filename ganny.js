 alert("Welcome to Granny's Kitchen");


function food(){
  let your = prompt("what is your favorite food ");
   document.write();
    document.getElementById("welcome").innerHTML =
   (" Hey, welcome " + your + " lover thank you for being here!");
}



let Soulfood;
while (Soulfood != "yes"){
  Soulfood = prompt("Do you like soul food?, yes or no?");

}
 

// What are dome ideas that you want to do with your javascript.
/* The the idea that I haveI will to make a weight checker. This will check the weight of people that come to the website. 
If the person weight more than 150 right now then will not be able to get in the website. However if they weight 
less than that weight than they will get to be in the weight. Comments to add is "Your weight to fat going away!!!!", amd "You
need so good soul food come get you some to eat."
*/

function checkweight(){
  let weight = prompt("How much do you weight");
  if (weight > 170) { //then
   alert(" Your to fat to be here go away"); 

  }
  if( weight < 170){ //then
   alert ("You need some meat on your bones. Get food now!!!!! But read my story first this took me a lot of time todo. Then go get something to eat. Now");
  }
}

 
checkweight();




var scale = prompt(" How many piece of corn with butter can you eat, 1-10?");
for(let i = 1; i < scale; i++){
document.write("<img src='https://media.healthyfood.com/wp-content/uploads/2016/09/Corn-on-the-cob-with-garlic-and-chive-butter-iStock-171575379-2000x1290.jpg'>");


}
 



