function chainSfx(chain) {
	let el = chain.shift();

	if (!el) { return; }

	new Howl({
		src: `/stuff/voice/speech_${el}_en.ogg`,
		autoplay: true,
		volume: 1.5,
		onend: function() {
			chainSfx(chain);
		}
	});
}

function secondsToSpeech(secs) {
	var minutes = Math.floor((secs % (60 * 60)) / 60);
    var seconds = Math.floor(secs % 60);

    if (minutes === 1) {
    	seconds += 60;
    	minutes--;
    }

    var chain = [];

    if (minutes) {
    	chain.push(...chainForNumber(minutes));
    	chain.push('minutes');
    }

    if (seconds) {
    	chain.push(...chainForNumber(seconds));
    	chain.push('seconds');
    }

    return chain;
}

function chainForNumber(number) {
	var orc = [];

	while (true) {
		if (number <= 20) {
			orc = [number];
			break;
		}
		if (number % 100 === 0) {
			orc = [number];
			break;
		}
		if (number < 100 && (number % 10 === 0)) {
			orc = [number];
			break;
		}
		if (number < 100 && (number % 25 === 0)) {
			orc = [number];
			break;
		}
		if (number > 100) {
			orc.push(Math.floor(number - (number % 100)));
		}
		if (number > 10) {
			orc.push(Math.floor((number % 100) - (number % 10)));
		}
		orc.push(Math.floor(number % 10));

		break;
	}

	var chain = [];
	orc.forEach((el) => {
		if (el !== 0) {
			chain.push('number_' + (el < 100 ? '0' : '') + (el < 10 ? '0' : '') + el);
		}
	});

	return chain;
}
