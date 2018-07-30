
var showActor = document.querySelectorAll('.actors-list .item-wrapper');
var showCostume = document.querySelectorAll('.costumes-list .item-wrapper');
var showVideo = document.querySelectorAll('.videos-list .video-wrapper, .videos-list .video-title');
var showCallBack = document.querySelector('.promo-callback button');
var popupActor = document.querySelector('.actors-popup');
var popupVideo = document.querySelector('.video-popup');
var popupLayer = document.querySelector('.popup-layer');
var popupClose = document.querySelector('.popup-container .actors-popup-close');

var imageAddItem = document.querySelectorAll('.image-add-item');
var imageNumber = 1;

showCallBack.addEventListener('click', function(evt){
	evt.preventDefault();
	popupActor.classList.add('show-popup');
	popupLayer.classList.add('show-popup');
});
for (var i = 0; i < showActor.length; i++) {
	showActor[i].addEventListener('click', function(evt){
		showActorPopup(evt);
	});
}
function showActorPopup(evt) {
	evt.preventDefault();
	popupActor.classList.add('show-popup');
	popupLayer.classList.add('show-popup');
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
	//popupVideo.classList.remove('show-popup');
	popupLayer.classList.remove('show-popup');
});
popupClose.addEventListener('click', function(){
	popupActor.classList.remove('show-popup');
	popupLayer.classList.remove('show-popup');
});

for (var i = 0; i < imageAddItem.length; i++) {
	imageAddItem[i].addEventListener('click', function(evt){
		for (imageNumber = 1; imageNumber < 7; imageNumber++) {
			addImageBefore(this);
		}
		imageNumber = 1;
	});
}

function addImageBefore(addImageItem) {
	var newImage = document.createElement('li');
	var imageSwitch = addImageItem.parentNode.className;
	newImage.innerHTML = getNewImage(imageSwitch);
	
	var addedImage = addImageItem.parentNode.insertBefore(newImage, addImageItem);
	addedImage.addEventListener('click', function(evt){
		showActorPopup(evt);
	});
}

function getNewImage(imageSwitch) {
	if (imageSwitch === 'actors-list') {
		var imageFolder = "actors/actor-";
		var hoverInfo = '<span class="actor-name">Илья</span>'+
						'<span class="actor-description">45 лет<br>Выпускник ВГТУ им. Щукина</span>';
	}
	else if (imageSwitch === 'costumes-list') {
		var imageFolder = "costumes/costume-";
		var hoverInfo = '<span class="hover-item costume-price">от 3300 руб.</span>'+
						'<span class="hover-item costume-name">Модель <br>"Боярский сине-серебристый"</span>'+
						'<span class="hover-item costume-order"><span>Заказать</span></span>';
	}
	
	return '<a href="#" target="_blank" class="item-wrapper">'+
				'<img src="img/' + imageFolder + imageNumber + '.jpg" alt="Здесь будет картинка c актёром" width="260" class="actors-img">'+
				'<span class="hover-background"></span>'+
				'<img src="img/icons/ico2.png" alt="иконка для наведения" class="hover-icon">'+
				'<div class="hover-info">'+
						hoverInfo
				'</div>'+
		   '</a>';
}