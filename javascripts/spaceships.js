var solarSystem = (function(oldSolarSystem){
	
	var spaceships = [];

	return {
		oldSolarSystem.getSpaceShip = function() {return spaceships;};

		oldSolarSystem.setSpaceShip = function(newSpaceShip) {spaceships.push(newSpaceShip);},

		oldSolarSystem.WreckSpaceShipt: =function() {spaceships.pop();}
	}

	return oldSolarSystem;

})(SolarSystem || {});   // if SolarSystem not exist us {}