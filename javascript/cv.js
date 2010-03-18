$(document).ready(function() {
	$('.about > li').click(function(event) {
		$(this).children('.category').toggle('fast');
		event.stopImmediatePropagation();
		event.preventDefault();
	});
	$('.category > li').click(function(event) {
		$(this).children('.item').toggle('fast');
		event.stopImmediatePropagation();
		event.preventDefault();
	});
});