var SolarSystem = (function(oldSolarSystem){
	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	var numPlanetsPeopleLandedOn = 0;

	getPlanets: function(){return planets;} ,

		oldSolarSystem.getPlanets = function(){
			return planets;
		};

		oldSolarSystem.getPlanetsLandedPeopleOn = function() {
			return numPlanetsPeopleLandedOn;
		};

		oldSolarSystem.setPlanetsLandedPeopleOn = function() {
			numPlanetsPeopleLandedOn++;
		};

		return oldSolarSystem;

})(SolarSystem || {});