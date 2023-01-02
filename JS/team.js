$(document).ready(function() {
	var state = true;
	$( "#button" ).on( "click", function() {
		
	if ( state ) {
		$( "#colorTrans" ).animate({
		backgroundColor: "red",
		}, 1000 );
	} 
	else {
		$( "#colorTrans" ).animate({
		backgroundColor: "green",
		}, 1000 );
	}
	state = !state;
	});
});