let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e) {
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
}

// Threshold Info
function openThresh() {
	document.getElementById('thresh-info').style.display = 'block';
}

function closeThresh() {
	document.getElementById('thresh-info').style.display = 'none';
}

// LSD Info
function openLSD() {
	document.getElementById('lsd-info').style.display = 'block';
	document.getElementById('mush-info').style.display = 'none';
	document.getElementById('mdma-info').style.display = 'none';
	document.getElementById('aya-info').style.display = 'none';
}

function closeLSD() {
	document.getElementById('lsd-info').style.display = 'none';
}

// MDMA Info
function openMD() {
	document.getElementById('mdma-info').style.display = 'block';
	document.getElementById('mush-info').style.display = 'none';
	document.getElementById('lsd-info').style.display = 'none';
	document.getElementById('aya-info').style.display = 'none';
}

function closeMD() {
	document.getElementById('mdma-info').style.display = 'none';
}

// Psilocybin Info
function openMush() {
	document.getElementById('mush-info').style.display = 'block';
	document.getElementById('lsd-info').style.display = 'none';
	document.getElementById('mdma-info').style.display = 'none';
	document.getElementById('aya-info').style.display = 'none';
}

function closeMush() {
	document.getElementById('mush-info').style.display = 'none';
}

// Aya Info
function openAy() {
	document.getElementById('aya-info').style.display = 'block';
	document.getElementById('mush-info').style.display = 'none';
	document.getElementById('lsd-info').style.display = 'none';
	document.getElementById('mdma-info').style.display = 'none';
}

function closeAy() {
	document.getElementById('aya-info').style.display = 'none';
}
