(function($){ 
    $.fn.displayHighlightMenu = function(options) { 		
		//defining the default colors of the highlight menu
        var defaults = $.extend({ 
            'bgColor'       : 'transparent', //initially without options
            'color'         : '#FFFFFF', //initially without options, white color
            'hoverBgColor'  : '#000000', 
            'hoverColor'    : '#FFFF99', 
        }, options); 
 
		console.log("aayu");
		//returning for each item of the menu
        return this.each(function() { 
			//select the list items or the items to be highlighted
            var items = $("li a"); 
            
            //set the defaults
            var o = defaults; 
            
            //add default css properties on the list items
            items.css('font-weight', 'bold')                                   
                 .css('color', o.color);
                 
            //add mouseover event and specify the hover properties from defaults
            items.mouseover(function() {				
                $(this).css('background-color', o.hoverBgColor) 
                       .css('color', o.hoverColor)                       
                       .css('font-style','italic')
                       .css('border-radius','2em');  
            }); 
 
			//add mouseout event and specify the original properties from defaults
            items.mouseout(function() { 
                $(this).css('font-weight', 'bold')
                       .css('background-color', o.bgColor) 
                       .css('color', o.color)                       
                       .css('font-style','normal'); 
            }); 
        }); 
    } 
})(jQuery);