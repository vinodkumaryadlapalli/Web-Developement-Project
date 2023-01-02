//Document ready function
$(document).ready(function() {
		
		//focus on reservation textbox
		$("#validation").focus();
		
		//Validate form
		$("#validation").validate({
			rules: {
				//Validate date with required and date type
				fname:{
					required:true
				},
				lname: {
					required: true
				},
				email: {
					required: true,
					email:true
				},
				prefereddate: {
					required: true,
					date: true
				}
			},
			//Add custome messages
			messages: {
				//add custome message for night textbox 
				fname:{
					required: "First name is required",	
					color: "red"
				},
				lname: {
					required: "Last name is required",
				},
				email: {
					required: "Email is required",
					email: "Please enter proper email id"
				},
				prefereddate: {
					required: "Prefered date is required",
					data:"Pleasse enter valid date"
				}
			}
		})

}); // end ready
