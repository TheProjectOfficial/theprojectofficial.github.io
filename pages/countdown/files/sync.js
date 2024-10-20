let timeOffset = 0;
let synced = false;
let syncing = false;
let syncs = [];

function syncTime() {
	syncing = true;
	syncs = [];
	syncWorker();
}

function syncDone() {
	console.log(syncs);
	synced = true;
	syncing = false;
	const avg = syncs.reduce((a, b) => a + b, 0) / 5;
	console.log('avg offset: ' + avg + 'ms');
	timeOffset = avg;
}

function getSyncedTime() {
	if (!synced && !syncing) {
		syncTime();
	}

	return new Date().getTime() + timeOffset;
}

function syncWorker() {
	$.get("/gettime.php", function(data) {
		const now = new Date().getTime();
		const offset = now - data;
		console.log('offset: ' + offset);

		syncs.push(offset);

		if (syncs.length < 5) {
			syncWorker();
		} else {
			syncDone();
		}
	});
}

let lastTime = null;

function tamperCheck() {
	const newTime = getSyncedTime();

	if (!lastTime) {
		lastTime = newTime;
		return;
	}

	if ((Math.abs(newTime - lastTime) < 850) || (Math.abs(newTime - lastTime) > 1100)) {
		synced = false;
	}

	lastTime = newTime;
}

$(document).ready(() => {
	setInterval(tamperCheck, 1000);
});
