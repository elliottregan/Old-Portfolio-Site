$(document).ready(function() {
	$("li > h3").click( function() {
		$('h3').removeClass('active')
  		$(this).addClass('active');
  		$('.info').removeClass('visible');
  		$(this).next().addClass('visible');
	});
});