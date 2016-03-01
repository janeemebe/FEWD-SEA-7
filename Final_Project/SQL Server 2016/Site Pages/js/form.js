$(document).ready(function(){
	
	$("#customize-btn").click(function(e){
		var firstNameId = $("#firstname").val();
		var lastNameId = $("#lastname").val();
		var emailId = $("#email").val();
		var phoneId = $("#phone").val();
		var cityId = $("#city").val();
		var stateId = $("#state").val();

		openRequestedPopup();

		function openRequestedPopup() {
		var windowObjectReference;
		var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
		var windowUrl = "minisite.html" + "?Name=" + firstNameId + " " + lastNameId + "&Email=" + emailId + "&Phone=" + phoneId + "&City=" + cityId + "&State=" + stateId;		

		e.preventDefault();

  		windowObjectReference = window.open(windowUrl);
  		}
	});

	
});