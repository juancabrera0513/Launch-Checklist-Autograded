// Write your JavaScript code here!


window.addEventListener("load", function () {
  
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault()});

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      listedPlanets = pickPlanet(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

      addDestinationInfo(
        document,
        listedPlanets.name,
        listedPlanets.diameter,
        listedPlanets.star,
        listedPlanets.distance,
        listedPlanets.moons,
        listedPlanets.image
      );
    });
    
  });
