$('#rtg-container').hide().fadeIn(1000);

$(document).ready(function(e){
	$(window).scroll(function () {
	    var scrollVar = $(window).scrollTop();
	    var divTop = $('#sticky-anchor').offset().top;
	   
	    if (scrollVar > divTop) {
	        $('#rtg-cta').addClass('rtg-sticky');
	        $('#sticky-anchor').addClass('placeholder');
	    } else {
	        $('#rtg-cta').removeClass('rtg-sticky');
	        $('#sticky-anchor').removeClass('placeholder');
	    }

	    $('.fadein').each(function (i) {
	        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	        var top_of_object = $(this).offset().top;
	        var bottom_of_window = scrollVar + $(window).height();

	        /*If the object is completely visible in the window, fade it in */
	        if (bottom_of_window >= top_of_object) {
	            $(this).fadeOut(2000);
	        } 
	        /* else {
	        $(this).animate({ 'opacity': '0' }, 1000);
	        }*/
	        //$(this).css( 'opacity': (bottom_of_window - $(this).offset().top) / 100);
	    });
	    $('.wipein').each(function (i) {
	        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	        var top_of_object = $(this).offset().top;
	        var bottom_of_window = scrollVar + $(window).height();

	        if (bottom_of_window >= top_of_object) {
	            $(this).animate({ 'width': 0 }, 1000);
	        }
	    });
	});

	var links = document.querySelectorAll(".slider-links");
			var wrapper = document.querySelector("#slider-wrapper");
			var activeLink = 0;
			for (var i = 0; i < links.length; i++) {
				var link = links[i];
				link.addEventListener("click", setClickedItem, false);
				link.itemID = i;
			}

				function setClickedItem(e) {
					removeActiveLinks();

					var clickedLink = e.target;
					activeLink = clickedLink.itemID;
					changePosition(clickedLink);
				}
				function removeActiveLinks() {
					for (var i = 0; i < links.length; i++) {
						links[i].classList.remove("active");
					}
				}
				function changePosition(link) {
					var position = link.getAttribute("data-pos");
					var translateValue = "translate3d(" + position + ", 0px, 0)";
					wrapper.style[transformProperty] = translateValue;
					link.classList.add("active");
				}
				var transforms = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
				var transformProperty = getSupportedPropertyName(transforms);
				function getSupportedPropertyName(properties) {
					for (var i = 0; i < properties.length; i++) {
						if (typeof document.body.style[properties[i]] != "undefined") {
							return properties[i];
							}
						}
					return null;
					}

				//
				// The code for sliding the content automatically
				//
				var timeoutID;
				 
				function startTimer() {
				    // wait 2 seconds before calling goInactive
				    timeoutID = window.setInterval(goToNextItem, 2500);
				}
				startTimer();
				 
				function resetTimer() {
				    window.clearInterval(timeoutID);
				    startTimer();
				}
				 
				function goToNextItem() {
				    removeActiveLinks();
				 
				    if (activeLink < links.length - 1) {
				        activeLink++;
				    } else {
				        activeLink = 0;
				    }
				 
				    var newLink = links[activeLink];
				    changePosition(newLink);
				}

	// $("nav a").click(function(e) {
	//   var target=$(this).attr("data-section");
	//   $("body").scrollTo(target);
	// })

	// $(".left-arrow").click(function(e) {
	// 	console.log("left clicked");
	// })

	// $(".right-arrow").click(function(e) {
	// 	console.log("right clicked");
	// })


	$(".tile").click(function(e) {
		$(this).toggleClass('active');
	})

	$("#generate-code").click(function(e){
		$(".input-text").removeClass("no-display");		
		addText();
		function addText() {
			var previewUrl = location.href;
			var minisiteUrl = previewUrl.replace("preview.html","minisite.html")
			document.myform.inputtext.value = "<iframe style='width:768px;height:1200px;border:none;' frameborder='0' src='" + minisiteUrl +"&width=768px&height=1200px&newWindow=true'></iframe>";
		}

	})

	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	    var regexS = "[\\?&]" + name + "=([^&#]*)";
	    var regex = new RegExp(regexS);
	    var results = regex.exec(window.location.href);
	    if (results == null) return "";
	    else return decodeURIComponent(results[1].replace(/\+/g, " "));
	  }
	  var firstName = unescape(getParameterByName('FirstName'));
	  var lastName = unescape(getParameterByName('LastName'));
	  var email = unescape(getParameterByName('Email'));
	  var phone = unescape(getParameterByName('Phone'));
	  var city = unescape(getParameterByName("City"));
	  var state = unescape(getParameterByName("State"));

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
			var windowUrl = "preview.html" + "?FirstName=" + firstNameId + "&LastName=" + lastNameId + "&Email=" + emailId + "&Phone=" + phoneId + "&City=" + cityId + "&State=" + stateId;		

			e.preventDefault();

	  		windowObjectReference = window.open(windowUrl);
	  		}
		});
})

