// eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a 3=["3/A.5","3/z.5","3/y.5","3/x.5","3/w.5","3/C.5"];a i=0;a 6=[];4 h(){i>0?e(--i):0}4 d(){i+1<3.b?e(++i):j()}4 e(){$("#k-g-7-9").F("E",3[i]);$("#c-7>D").G("u")}4 j(){a 8=0;f(6.b!==0){6.t(4(q){8+=v(q)});8=(s.B((8/6.b)*m)/m).Q(2)}$("#k-g-7-9+U").T("W H V X Y. S R K J: "+8)}$(I).L(4(){$("#c-7").9("M",4(){f(i<3.b){6[i]=$("#c-7").P();d()}});$("#r-p .o[l=\'O\']").9("n",d);$("#r-p .o[l=\'N\']").9("n",h)});',61,61,'|||images|function|jpg|votes|vote|ave|on|var|length|your|nextImage|changeImage|if|to|previousImage||calculateVotes|image|value|100|click|btn|wrapper|element|buttons|Math|forEach|selected|parseInt|food6|food5|food4|food3|food2|round|food7|option|src|attr|removeAttr|have|document|was|score|ready|change|Back|Skip|val|toFixed|deliciousness|Total|text|div|reached|You|the|end'.split('|'),0,{}))
$(document).ready(function(){

	var choiceIndex = 0;

	var choices = [{
		image: "food1.jpg",
		total: 0
	}, 
	{	
		image: "food2.jpg",
		total: 0
	},
	{
		image: "food3.jpg",
		total: 0
	},
	{
		image: "food4.jpg",
		total: 0
	},
	{
		image: "food5.jpg",
		total: 0
	},
	{
		image: "food6.jpg",
		total: 0
	},
	{
		image: "food7.jpg",
		total: 0
	},
	{
		image: "food8.jpg",
		total: 0
	}
	];

	$("#skip-button").click(function(e) {
		console.log("skip button clicked");
		if(choiceIndex < choices.length - 1) {
			choiceIndex += 1;
			updatePage();
		}
	});


	$("#back-button").click(function(e) {
		console.log("back button clicked")
		if(choiceIndex > 0) {
		choiceIndex -= 1;
		updatePage();
		}
	});


	$("#your-vote").change(function(e) {
		choices[choiceIndex].total = $("#your-vote").val();
		var sumChoices = 0;
		for(var i = 0; i < choices.length; i += 1) {
			if(!choices[i].total) {
				$("#skip-button").trigger("click");
				return;
			}
			sumChoices += parseInt(choices[i].total, 10);
		};
		var avgChoices = sumChoices / choices.length;
		$("#deliciousness-score").text("Your delciousness score is" + " " + avgChoices);
	});


	var updatePage = function() {
		$("#image-to-vote-on").attr("src", "images/" + choices[choiceIndex].image);
		$("#your-vote").val(choices[choiceIndex].total);
	}

});


//document ready
//https://api.jquery.com/change/
//http://api.jquery.com/attr/
//on change- "rating event"
	//store rating in an array
	//show the new image (store a variable for which image they are on)
	//update the href value


//create an array of objects
//variable that is an index to that array of objects
//create var for total
//add an event listener for back
	//$("#back-button").onclick (done)
	//in the event, decrement i if i > 0 for back button
//add an event listener for skip
	//in the event, increment i if i < array.length - 1
//add an event handler for dropdown
	//use event handler change
	// $().on('change', function(e) {}) or
	// $().change(function (e) {})
	// when the event happens, grab the value of "your-vote"
	// add value to total (in order to keep score)
//check to see if all objects have been voted on
	//options: put score in array of objects or put an array of totals
//trigger skip
//once you've done the above
//to go back to remainders, modulus (%) of array length
	//other option: check if your choice index equals choices.length - 1, and if is on skip, reset choice index



