$(document).ready(function() {
	$('.about > li').click(function(event) {
		if (!$(event.target).is('a')) {
			$(this).children('.category').toggle('fast');
			event.stopImmediatePropagation();
		}
	});

	$('.category > li').click(function(event) {
		if (!$(event.target).is('a')) {
			$children = $(this).children('.item');
			if ($children.length > 0) {
				$children.toggle('fast');
				event.stopImmediatePropagation();
			}
		}
	});

	var email = 'j' + '@' + 'npaulpos';
	email += '.ma';
	$('#email').html('<a href="mailto:' + email + '">' + email + '</a>');

  if (window.location.search.match(/short/)) {
    $('.less-relevant, .site').remove();
    $('.short').removeClass('short');
  }
});
