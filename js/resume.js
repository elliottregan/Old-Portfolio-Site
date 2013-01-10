$(document).ready(function() {
	
	$('a:not([href^="http://eregan.db-dev.info"]):not([href^="#"]):not([href^="/"])').addClass('external');
	
	$("a.external").attr("target","_blank");
	
	$(".star").click( function() {
	  $(".options").fadeIn();
	});
	
	$(".options").mouseleave( function() {
	  $(".options").fadeOut();
	});
	
	$(".plus").on( "click", function () {
	  
	});
	
	$("li.red").on("click", function() {
	  $("section h2").css({'color': '#850000', 'border-color': '#850000'});
	});
	$("li.blue").on("click", function() {
	  $("section h2").css({'color': '#004985', 'border-color': '#004985'});
	});
	$("li.green").on("click", function() {
	  $("section h2").css({'color': '#598500', 'border-color': '#598500'});

	});
	$("li.grey").on("click", function() {
	  $("section h2").css({'color': 'grey', 'border-color': 'grey'});

	});
	$("li.gray").on("click", function() {
	  $("section h2").css({'color': 'gray', 'border-color': 'gray'});

	});
	$("li.ponies").on("click", function() {
	  $("section h2").css({'color': '#ff09a7', 'border-color': '#ff09a7'});
    
	});
});