function calcularX(x1, x2) {
	return ((x2 - x1)**(x2 - x1));
}

function calcularY(y1, y2) {
	return ((y2 - y1)**(y2 - y1));
}

console.log(Math.sqrt(calcularX(1, 2) + calcularY(3, 4)));
