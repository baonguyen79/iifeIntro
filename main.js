// var outside = "global";


// function scopeStuff () {
// 	var inside = "local";
// 	console.log("outside from inside the function", outside);  //global
// 	console.log("inside from inside the function", inside);		//local
// }

// console.log("outside from outside the function", outside);  //global
// console.log("inside from outside the function", inside);	//npn

// scopeStuff();

var global_base = 500;

(function throwAway(){
	global_base += 500;
	console.log(global_base);
})();

var cats = (function(){
	var color = "black";
	var type = "tiger";
	return {									//return object
			getColor: function() {return color;} ,
		    getType: function () {return type;} ,
		    setColor: function(newColor) {color = newColor;}
			}
})();


console.log(cats.getColor());

// throwAway();

// document.getDocumentById('cat').addEventListener("click")
