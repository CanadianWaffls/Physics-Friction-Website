var e = 1;
function exampleButton(){
    if(e == 1){
        e = 2;
        document.getElementById("exampleButton").textContent = "Add Friction";
        document.getElementById("frictionExampleImg").src = "friction2.jpg";
        document.getElementById("frictionExampleText").textContent = "Without friction the tire spins but does not push against the ground meaning the car moves forward very little if at all."
    }
    else{
        e = 1;
        document.getElementById("exampleButton").textContent = "Remove Friction";
        document.getElementById("frictionExampleImg").src = "friction1.jpg";
        document.getElementById("frictionExampleText").textContent = "With Friction the tire turns and pushes off the ground, moving the car forward."
    }
}