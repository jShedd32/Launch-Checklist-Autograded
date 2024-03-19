// Write your helper functions here!

//import 'cross-fetch/polyfill';

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
 document.getElementById("missionTarget").innerHTML =
   `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    
        if (testInput === "") {
          return "Empty";
        } else if (isNaN(Number(testInput))) {
          return "Not a Number";
        } else {
          return "Is a Number";
        }
      }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (validateInput(pilot.trim())=== "", !isNaN(pilot)){
    document.getElementById("pilotStatus").innerHTML =
    "Pilot Name is Required";

    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
    
    document.getElementById("launchStatus").style.color = "red";
    
    document.getElementById("faultyItems").style.visibility = "visible";
    return;
  } else {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
  }
  
  if (validateInput(copilot.trim())=== "", !isNaN(copilot)){
    document.getElementById("copilotStatus").innerHTML =
    "Co-pilot Name is Required ";

    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
    
    document.getElementById("launchStatus").style.color = "red";
    
    document.getElementById("faultyItems").style.visibility = "visible";
    return;
  } else {
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
  }

  let goodFuelLevel = Number(fuelLevel) >= 10000;
  let goodCargoMass = Number(cargoLevel) <= 10000;

  document.getElementById("fuelStatus").innerHTML = 
  goodFuelLevel ? "Fuel level high enough for launch" : "Fuel level too low for launch";
  
  document.getElementById("cargoStatus").innerHTML = 
  goodCargoMass ? "Cargo mass low enough for launch" : "Cargo mass too heavy for launch";

  if (goodFuelLevel && goodCargoMass) {
    document.getElementById("launchStatus").innerHTML =
      "Shuttle is Ready for Launch";
    
    document.getElementById("launchStatus").style.color = "green";
  } else {
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    
    document.getElementById("launchStatus").style.color = "red";
  }

    document.getElementById("faultyItems").style.visibility = "visible";

 }
 
 async function myFetch() {
     let planetsReturned;
     response = await fetch("https://handlers.education.launchcode.org/static/planets.json")
     planetsReturned= response.json();
    
    
    return planetsReturned;
     
 };
 
 function pickPlanet(planets) {
    if (planets.length > 0) {
        const planet = Math.floor(Math.random() * planets.length);
        return planets[planet];
      }
      alert("No planets available to choose from.");
      return null;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;