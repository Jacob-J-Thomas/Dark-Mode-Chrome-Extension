//adds filter to invert color scheme on all elements
document.querySelector("html").style.filter = "invert(.92) brightness(1.4) hue-rotate(180deg)";

//finds all images on the page, and reinverts them
var images = document.querySelectorAll("img, picture, video");

for (image of images) {
	image.style.filter = "invert(.92) brightness(1.25) contrast(.9) hue-rotate(180deg)";
}