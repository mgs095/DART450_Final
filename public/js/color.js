$(document).ready(function() {
	
	$('body').click(function() {
		var colors = ['aquamarine', 'coral', 'cornsilk', 'white', 'seagreen', 'moccasin', 'white', 'powderblue', 'gold'];  
		var result = colors[Math.floor(Math.random() * colors.length)];		
		$(this).css('background-color', result);
	});

});