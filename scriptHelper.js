// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  image
) {
  // Here is the HTML formatting for our mission target div.
  document.getElementById("missionTarget").innerHTML =`
  
  
                     <h2>Mission Destination</h2>
                     <ol>
                         <li>Name: ${name}</li>
                         <li>Diameter: ${diameter} </li>
                         <li>Star: ${star}</li>
                         <li>Distance from Earth: ${distance} </li>
                         <li>Number of Moons: ${moons} </li>
                     </ol>
                     <img src=${image}>`   


  
  
  
  
};

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (
    validateInput(pilot) === "Empty"  || 
    

    validateInput(copilot) === "Empty" || 

    validateInput(fuelLevel) === "Empty" ||


    validateInput(cargoLevel) === "Empty"

  ) {
    alert("All fields are required!");
    return
  }

  if (
    validateInput(pilot) === "Is a Number" || 
    validateInput(copilot) === "Is a Number"
  ) {
    alert("Pilot and Co-pilot names must be text.");
    return;
  } else {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
  }

  if (isNaN(fuelLevel) || isNaN(cargoLevel)) {
    alert("Fuel and Cargo mass must be a number.");
    return;
  }
  

  if (fuelLevel < 10000) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML =
      "Fuel level too low for launch";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
  } else if (cargoLevel > 10000) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("cargoStatus").innerHTML =
      "Cargo mass too heavy for launch";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("fuelStatus").innerHTML =
      "Fuel level high enough for launch";
  } else {
    document.getElementById("fuelStatus").innerHTML =
      "Fuel level high enough for launch";
    document.getElementById("cargoStatus").innerHTML =
      "Cargo mass low enough for launch";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;


