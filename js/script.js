
var showActor = document.querySelectorAll('.actors-list .item-wrapper');
console.log(showActor);
var popupActor = document.querySelector('.popup-container');
var popupLayer = document.querySelector('.popup-layer');
var popupClose = document.querySelector('.popup-container .actors-popup-close');

for (var i = 0; i < showActor.length; i++) {
	showActor[i].addEventListener('click', function(evt){
		evt.preventDefault();
		popupActor.classList.add('show-popup');
		popupLayer.classList.add('show-popup');
	});
}
popupLayer.addEventListener('click', function(){
	popupActor.classList.remove('show-popup');
	popupLayer.classList.remove('show-popup');
});
popupClose.addEventListener('click', function(){
	popupActor.classList.remove('show-popup');
	popupLayer.classList.remove('show-popup');
});