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
	log('Changing typography');
	var baseSize = 100,
	    baseUnit = '%',
	    getScaledValue = function(increase) {
		    return (baseSize * increase) + baseUnit;
	    };

	$('html').css({
		'font': 'normal normal 400 1em/1.5em Georgia, Serif'
	});
	$('h1,h2').css({
		'font-size': getScaledValue(1.4),
		'line-height': getScaledValue(1.45)
	});
	$('h3,h4').css({
		'font-size': getScaledValue(1.2),
		'line-height': getScaledValue(1.23)
	});

	/* staticly positioned ToC */
	log('Enhancing table of contents');
	var css = '#faqNav + ul { display: none; margin: 0; border-right: solid 1px #333; border-bottom: solid 1px #333; padding: 0; position: fixed; top: 0; left: 0; }';
	var style = document.createElement('style'),
	    rules = document.createTextNode(css);

	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = rules.nodeValue;
	} else {
		style.appendChild(rules);
	}
	document.getElementsByTagName('head')[0].appendChild(style);
})();

