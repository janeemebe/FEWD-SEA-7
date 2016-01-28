$(document).ready(function(){
	var a;
	var b;
	var compareHandler = function() {
		a = parseInt($("#a").val());
		b = parseInt($("#b").val());

		if (a > b) {
			console.log("a is greater than b");
		}
		else if (b > a) {
			console.log("a is less than b");
		}
		else {
			console.log("a and b are equal");
		}
	};

	$("#submit").click(compareHandler);

});
