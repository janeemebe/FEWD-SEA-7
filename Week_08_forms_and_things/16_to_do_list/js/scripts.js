$(document).ready(function(){
	var itemNumber = 0;
	$("#entry").submit(function(e){
		e.preventDefault();
		var newTask = $("#inputTask").val();
		itemNumber += 1;
		console.log("added");
		$('#to-do-list').append('<tr><td>' + itemNumber + '.</td><td>' + newTask + '</td><td><input name="isDone" type="checkbox"></input></td></tr>');
		$('#inputTask').val('');


	})


})
