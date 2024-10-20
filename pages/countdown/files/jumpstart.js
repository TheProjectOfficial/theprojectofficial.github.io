//Howler.mobileAutoEnable = false;

const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

$(document).ready(function() {
	if (isChrome) {
		var sound = new Howl({
			src: '/unlink/res/audio/blank.ogg',
			onplay: function() {
				JumpStart();
			},
			onplayerror: function() {
				console.log("got here!");
			}
		});

		sound.play();
	} else {
		JumpStart();
	}	
});

let jumped = false;
function JumpStart() {
	if (jumped) {
		return;
	}

	jumped = true;
	$(document).trigger('jumped');
}

function Jump(callback) {
	$(document).on('jumped', callback);
}

Jump(function() {
	console.log("i jumped");
});
