var rainbow_colors = [
	{ name: 'red', r: 225, 	g: 15, 	b: 0}, 
	{ name: 'orange', r: 212, 	g: 95, 	b: 0}, 
	{ name: 'yellow', r: 251, 	g: 230, b: 0}, 
	{ name: 'green', r: 95, g: 169, b: 7},
	{ name: 'blue', r: 5, g: 54, b: 118},
	{ name: 'indigo', r: 146, g: 65, b: 225},
	{ name: 'violet', r: 212, g: 73, b: 226}
];

var position = 0;

var color = rainbow_colors[position];

var backgroundElement = document.getElementById('background');

document.addEventListener('scroll', onScroll );

function onScroll ( event ) {

	var nextColor = rainbow_colors[position + 1];
		console.log(position);
	if ( color.r !== nextColor.r) {
		if ( color.r > nextColor.r ) {
			color.r -= 1;
		} else {
			color.r += 1;
		}
	}

	if ( color.g !== nextColor.g) {
		if ( color.g > nextColor.g ) {
			color.g -= 1;
		} else {
			color.g += 1;
		}
	}

	if ( color.b !== nextColor.b) {
		if ( color.b > nextColor.b ) {
			color.b -= 1;
		} else {
			color.b += 1;
		}
	}

	if (color.r === nextColor.r && color.g === nextColor.g && color.b === nextColor.b && position < rainbow_colors.length) {
		position += 1;
	}

	backgroundElement.style.backgroundColor = 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';

}
