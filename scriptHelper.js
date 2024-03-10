// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
   return `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${planetsReturned.name} </li>
                     <li>Diameter: ${planetsReturned.diameter} </li>
                     <li>Star: ${planetsReturned.star}</li>
                     <li>Distance from Earth: ${planetsReturned.distance} </li>
                     <li>Number of Moons: ${planetsReturned.moons} </li>
                 </ol>
                 <img src="${planetsReturned.image}">
    `
 }
 
 function validateInput(testInput) {
    let formSubmit = document.getElementById("formSubmit");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    formSubmit.addEventListener("click", function(event){
       if(pilot.value.trim === "" || copilot.value.trim === "" || fuelLevel.value.trim === "" || cargoLevel.value.trim === ""){
            alert("All feilds are required!")
            return "Empty";
        };
            event.preventDefault();

        if(!isNaN(pilot.value) ){
            alert("Need to enter valid input.")
            return "Is a Number";
        };
            event.preventDefault();

        if(!isNaN(copilot.value) ){
            alert("Need to enter valid input.")
            return "Is a Number";
        };
            event.preventDefault();

        if(isNaN(fuelLevel.value) ){
            alert("Need to enter valid input.")
            return "Not a Number";
        };
            event.preventDefault();

        if(isNaN(cargoLevel.value) ){
            alert("Need to enter valid input.")
            return "Not a Number";
        };
            event.preventDefault();
        
    });
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   // validateInput(pilot);
    //validateInput(copilot);
    //validateInput(fuelLevel);
    //validateInput(cargoLevel);
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        
         });

         let data = await response.json();
         for(let i =0; i < data.lenght; i++){
            let planet = data[i];
         }
    
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = {};
    
    //get random number and get planet with that index
    //Math.random()
    return planet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;