$(document).ready(function(){

	// var selectField = $("#city-type");
	// cities.forEach(function(city) {
	// 	var $option = $("<option>");
	// 	$option.html(city);
	// 	$option.val(city);
	// 	$selectField.append($option);
	// })

var cities=["NYC", "SF", "LA", "Austin", "Sydney"];

for(var i = 0; i < cities.length; i++){
	var option = "<option value=";
	option+= cities[i];
	option+= ">" + cities[i] + "</option>"
	$("#city-type").append(option);
};

$("#city-type").change(function(){
	var selectedCity = $("#city-type option:selected").val();
	$("body").removeClass()
	$("body").addClass(selectedCity.toLowerCase());
});


});

