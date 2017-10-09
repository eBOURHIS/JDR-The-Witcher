Array.prototype.rand = function () {
	return this[Math.floor(Math.random() * this.length)]
}

function qr(element) {
	return document.querySelector(element);
}
