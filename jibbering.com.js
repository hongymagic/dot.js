(function() {
	var log = function() {
		if (console) {
			console.log(Array.prototype.slice.call(arguments));
		}
	};

	var $window = $(window);

	/* let's make it a little more readable on full-screen browsers */
	if ($window.width() > 860) {
		log('Adjusting body size');
		$('body').css({
			'width': '840px',
			'margin': '2em auto'
		});
	}

  /* change typography */
  {
    log('Changing typography');
    $('html,body,h1,h2,h3,h4,h5,p').css({
      'font': 'normal normal 400 1em/1.5em Georgia, Serif'
    });
    $('h1,h2').css({
      'font-size': '135%',
      'line-height': '140%'
    });
  }
})();

