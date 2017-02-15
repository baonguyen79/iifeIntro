var SolarSystem = (function(){
	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	var numPlanetsPeopleLandedOn = 0;
	var dwarfPlanets = [];
	var spaceships = [];
	var stars = ["Sun", "Alpha Centauri", "Wolf 359"];
	var age = 0;

	return {
		getPlanets: function(){return planets;} ,
		getPlanetsLandedPeopleOn: function() {return numPlanetsPeopleLandedOn;} ,
		setPlanetsLandedPeopleOn: function() {numPlanetsPeopleLandedOn++;},
		getSpaceShip: function() {return spaceships;},
		setSpaceShip: function(newSpaceShip) {spaceships.push(newSpaceShip);},
		WreckSpaceShipt: function() {spaceships.pop();},
		getDwarfPlanets: function(){ return "they are rejects";},
		setDwarfPlanets: function(lumpOfRock){dwarfPlanets.push(lumpOfRock);},
		getStars: function(){return stars },
		setStars: function(newStar){stars.push(newStar);},
		getSolarSystemAge: function(){return age},
		setSolarSystemAge: function(){age++;}

	}

})();

console.log("planets", SolarSystem.getPlanets());
console.log("planets with people:", SolarSystem.getPlanetsLandedPeopleOn());
SolarSystem.setSpaceShip("Voyager");
SolarSystem.setSpaceShip("Voyager 2");
SolarSystem.setSpaceShip("Gemini");
SolarSystem.setSpaceShip("Apollo");
console.log("pop Spaceships:", SolarSystem.getSpaceShip());

