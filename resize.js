//make sure that everything fits on the screen

window.onresize = function(){
	var max_height = window.innerHeight - 50;
	var	navbar = document.getElementById("navbar-collapse");
	var	images = document.getElementsByClassName("images");

	//shrink the navbar if it is too long
	navbar.style.maxHeight = max_height + 'px';

	//shrink the images if they are too tall
	for(var i=0; i<images.length; i++){
		images[i].style.maxHeight = max_height + 'px';
	}
}

//resize the elements when the page is loaded
window.onresize();