$(document).ready(function(){
	var total = 0;
	var formatCurrency = function(value) {
		var returnValue = value.toFixed(2);
		return '$' + returnValue;
	};
	$("#entry").submit(function(e){
		e.preventDefault();
		var newEntry = $("#newEntry").val();
		newEntry = parseFloat(newEntry);
		$('#entries').append('<tr><td colspan = "2">' + (formatCurrency(newEntry)) + '</td></tr>');
		total += newEntry;
		$("#total").html(formatCurrency(total));
		$('#newEntry').val('');
	});

});



// var total = 0.00

// document.getElementById('entry').onsubmit = enter;

// function enter() {
// 	var entry = document.getElementById('newEntry').value;
// 	var entry = parseFloat('entry');
// 	currency = currencyFormat('entry');
// 	document.getElementById('entries').innerHTML += '<tr><td colspan = "2">' + currency + '</td></tr>';
// 	total += entry;
// 	document.getElementById('total').innerHTML = currencyFormat(total);
// 	document.getElementById('newEntry').value = '';
// 	return false;
// }

// function currencyFormat(number) {
//   var currency = parseFloat(number);
//   currency = '$' + currency;
//   return currency;
// }