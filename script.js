// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
    const formSubmit = document.getElementById("formSubmit");


    // add event listener for the submit button
   // window.addEventListener("submit", function(){
        // set variables for (document, list, pilot, copilot, fuelLevel, cargoLevel)

       // function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
   // });
 });