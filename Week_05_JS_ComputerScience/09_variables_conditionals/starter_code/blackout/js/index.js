$(document).ready(function(){
	var lightsOn = true;
	// on click, background will go dark
	$("button").click(function(e){
		if (lightsOn) {
			$("body").addClass("dark");
			lightsOn = false;
		} else {
			$("body").removeClass("dark");
			lightsOn = true;
		}
	});
});

