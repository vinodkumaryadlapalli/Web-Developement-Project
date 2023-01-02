$(document).ready(function(){
	console.log("slider");
	$("#slider").bxSlider({		
		mode: 'fade',
		auto: true,
		slideWidth: 700,
		speed: 1000,
		pause: 1000
	});

 	var searchTerm;
	$("#btnSearch").click(function() {
		
		// Set the search term
		searchTerm = "";
		if ($("#search").val() == "") { alert("You must enter one or more tags!"); }
		else {
			searchTerm = $("#search").val();
			// Build the URL based on the search term
			var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
					  "format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";

			$.getJSON(url, function(data){
				var html = "";
				$.each(data.items, function(i, item){
					html += "<h2>" + item.title + "</h2>";	
					html += "<img src=" + item.media.m + ">";
					html += "<p><b>Tags: </b>" + item.tags + "</p>";
				});
				$("#photos").html(html);
			});
		}
	});
});