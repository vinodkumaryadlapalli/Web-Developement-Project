$(document).ready(function(){
	$.getJSON("specials.json", function(data){
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#products").append(
				"<tr>" +
				"<td>" + value.NAME + "<br>" + "</td>" +
				"<td>" + value.Stock  + "<br>" + "</td>" +
				"<td>" + value.QuantityOnHand + "<br>" + "</td>" +
				"<td>" + value.Size + "<br><br>" + "</td>" + 
                "<td>" + value.Colour + "<br>" + "</td>" +
                "</tr>"
				);
			});
		});
	});
});