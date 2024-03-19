// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanetsResponse = myFetch();
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        if (listedPlanets && listedPlanets.length > 0) {
            let planet = pickPlanet(listedPlanets);
            addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
          } 
    })
    
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      let list = document.getElementById("faultyItems")
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
  
      formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    });
});