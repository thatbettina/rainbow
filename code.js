var color = {
	red: 255,
	green: 255,
	blue: 255
};

var backgroundElement = document.getElementById('background');

document.addEventListener('scroll', onScroll );

function onScroll ( event ) {


	if  (color.red > 0) {
		color.red -= 10;

	}else {
		if (color.green > 0) {
			color.green -= 10;
		}else{
			if (color.blue > 0) {
				color.blue -= 10;
			}
		}
	}
	backgroundElement.style.backgroundColor = 'rgb(' + color.red + ',' + color.green + ',' + color.blue + ')';

}
