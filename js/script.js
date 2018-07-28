
var showActor = document.querySelectorAll('.actors-list .item-wrapper');
var showCostume = document.querySelectorAll('.costumes-list .item-wrapper');
var showVideo = document.querySelectorAll('.videos-list .video-wrapper, .videos-list .video-title');
var showCallBack = document.querySelector('.promo-callback button');
console.log(showActor);
console.log(showCostume);
console.log(showVideo);
console.log(showCallBack);
var popupActor = document.querySelector('.actors-popup');
var popupVideo = document.querySelector('.video-popup');
var popupLayer = document.querySelector('.popup-layer');
var popupClose = document.querySelector('.popup-container .actors-popup-close');

showCallBack.addEventListener('click', function(evt){
	evt.preventDefault();
	popupActor.classList.add('show-popup');
	popupLayer.classList.add('show-popup');
});
for (var i = 0; i < showActor.length; i++) {
	showActor[i].addEventListener('click', function(evt){
		evt.preventDefault();
		popupActor.classList.add('show-popup');
		popupLayer.classList.add('show-popup');
	});
}
for (var i = 0; i < showCostume.length; i++) {
	showCostume[i].addEventListener('click', function(evt){
		evt.preventDefault();
		popupActor.classList.add('show-popup');
		popupLayer.classList.add('show-popup');
	});
}
for (var i = 0; i < showVideo.length; i++) {
	showVideo[i].addEventListener('click', function(evt){
		evt.preventDefault();
		popupVideo.classList.add('show-popup');
		popupLayer.classList.add('show-popup');
	});
}
popupLayer.addEventListener('click', function(){
	popupActor.classList.remove('show-popup');
	popupVideo.classList.remove('show-popup');
	popupLayer.classList.remove('show-popup');
});
popupClose.addEventListener('click', function(){
	popupActor.classList.remove('show-popup');
	popupLayer.classList.remove('show-popup');
});