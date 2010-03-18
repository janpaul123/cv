$(document).ready(function() {
	$('.about > li').click(function(event) {
		if (!$(event.target).is('a')) {
			$(this).children('.category').toggle('fast');
			event.stopImmediatePropagation();
		}
	});
	$('.category > li').click(function(event) {
		if (!$(event.target).is('a')) {
			$children = $(this).children('.item')
			if ($children.length > 0) {
				$children.toggle('fast');
				event.stopImmediatePropagation();
			}
		}
	});
});