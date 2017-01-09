$(document).ready(initPage);
function initPage(){
	initNav();
	initGallery();
}
/* init Nav */
function initNav(){
	$('.menu-opener').click(function(e) {
		e.preventDefault();
		$("body").toggleClass('nav-visible');
	});
};


/* init Gallery */
function initGallery(){
	var swiper = new Swiper('.swiper-container', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 1,
		loop: true
	});
};