/* Scanlines */
body:before {
	content: "";
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: 1000;
	background-image: url("https://classic.systemspace.network/res/img/ui/static/overlay.png");
	background-repeat: all;
	background-position: 0px 0px;
	animation-name: Static;
	animation-duration: 2s;
	animation-iteration-count: infinite;
	animation-timing-function: steps(4);
	box-shadow: inset 0px 0px 10em rgba(0,0,0,0.4);
}

body:after {
	content: "";
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: 1000;
	background-image: url("https://classic.systemspace.network/res/img/ui/static/overlay2.png");
	background-repeat: all;
	background-position: 0px 0px;
	animation-name: Static;
	animation-duration: 0.8s;
	animation-iteration-count: infinite;
	animation-timing-function: steps(4);
}

@keyframes Static {
	0% { background-position: 0px 0px; }
	100% { background-position: 0px 4px; }
}