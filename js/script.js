
var topLinks = document.querySelectorAll('.top-links-list .item-wrapper');
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

//console.log(priceShowBox);

var orderImageLink = document.querySelectorAll('.top-order-list-description a');

showCallBack.addEventListener('click', function(evt){
	evt.preventDefault();
	popupActor.classList.add('show-popup');
	popupLayer.classList.add('show-popup');
});
/*for (var i = 0; i < showActor.length; i++) {
	showActor[i].addEventListener('click', function(evt){
		showActorPopup(evt);
	});
}*/
for (var i = 0; i < showActor.length; i++) {
	showActor[i].addEventListener('click', showActorPopup);
}
for (var i = 0; i < showCostume.length; i++) {
	showCostume[i].addEventListener('click', showActorPopup);
}
function showActorPopup(evt) {
	evt.preventDefault();
	popupActor.classList.add('show-popup');
	popupLayer.classList.add('show-popup');
}
for (var i = 0; i < showVideo.length; i++) {
	showVideo[i].addEventListener('click', showVideoPopup);
}
function showVideoPopup(evt) {
	evt.preventDefault();
	popupVideo.classList.add('show-popup');
	popupLayer.classList.add('show-popup');
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

for (var i = 0; i < orderImageLink.length; i++) {
	orderImageLink[i].addEventListener('mouseover', function(evt){
		evt.preventDefault();
		this.parentNode.parentNode.querySelector('.top-order-image').classList.add('hide-element');
		this.parentNode.parentNode.querySelector('.top-order-image-hover').classList.remove('hide-element');
	});
	orderImageLink[i].addEventListener('mouseleave', function(evt){
		evt.preventDefault();
		this.parentNode.parentNode.querySelector('.top-order-image').classList.remove('hide-element');
		this.parentNode.parentNode.querySelector('.top-order-image-hover').classList.add('hide-element');
	});
}

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
	var imageSwitch = addImageItem.parentNode.className.split(' ')[0];
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
		var imageClass = 'actors-';
	}
	else if (imageSwitch === 'costumes-list') {
		var imageFolder = "costumes/costume-";
		var hoverInfo = '<span class="hover-item costume-price">от 3300 руб.</span>'+
						'<span class="hover-item costume-name">Модель <br>"Боярский сине-серебристый"</span>'+
						'<span class="hover-item costume-order"><span>Заказать</span></span>';
		var imageClass = 'costume-';
	}
	
	return '<a href="#" target="_blank" class="item-wrapper">'+
				'<img src="img/' + imageFolder + imageNumber + '.jpg" alt="Здесь будет картинка c актёром" class="' + imageClass + 'img">'+
				'<span class="hover-background"></span>'+
				'<img src="img/icons/ico2.png" alt="иконка для наведения" class="hover-icon">'+
				'<div class="hover-info">'+
						hoverInfo
				'</div>'+
		   '</a>';
}


function linkReset(evt) {
	evt.preventDefault();
}

//-----------------------------------------------------mobile.js--------------------------------------------------------//

if (screen.width < 750) {
	//window.addEventListener('resize', function(){
		var containerWidth = document.querySelector('.container').offsetWidth;
		var mobileClickImage = document.querySelectorAll('.js-image');
		
		console.log(containerWidth / 20);
		//var mobileNotMainImage = document.querySelectorAll('.js-image:not(.js-image-main)');
		for (var i = 0; i < mobileClickImage.length; i++) {
			mobileClickImage[i].style.marginRight = containerWidth / 20 + 'px';
		}
		
		for (var i = 0; i < showActor.length; i++) {
			showActor[i].removeEventListener('click', showActorPopup);
			showActor[i].addEventListener('click', linkReset);
		}
		for (var i = 0; i < showCostume.length; i++) {
			showCostume[i].removeEventListener('click', showActorPopup);
			showCostume[i].addEventListener('click', linkReset);
		}
		for (var i = 0; i < showVideo.length; i++) {
			showVideo[i].removeEventListener('click', showVideoPopup);
		}
		for (var i = 0; i < topLinks.length; i++) {
			topLinks[i].addEventListener('click', linkReset);
		}
		
		resizeImages();
		changeImagesPosition();
	//});
	
	//for (var i = 0; i < mobileNotMainImage.length; i++) {
	//	mobileNotMainImage[i].style.width = mobileNotMainImage[i].clientWidth * 0.75 + 'px';
	//	mobileMainImage[i].style.width = mobileMainImage[i].clientWidth + 'px';
	//	console.log(mobileNotMainImage[i].style.width);
	//}

	function changeImagesPosition(){
		for (x = 0; x < mobileClickImage.length; x++) {
			mobileClickImage[x].addEventListener('click',  function () {
				if(this.classList.contains('js-image-left')) {
					this.classList.remove('js-image-left');
					this.classList.add('js-image-main');
					this.classList.add('css-image-main');
					this.nextElementSibling.classList.remove('js-image-main');
					this.nextElementSibling.classList.remove('css-image-main');
					this.nextElementSibling.classList.add('js-image-right');
					if(this.nextElementSibling.nextElementSibling) {
						this.nextElementSibling.nextElementSibling.classList.remove('js-image-right');
					}
					if(this.previousElementSibling) {
						this.previousElementSibling.classList.add('js-image-left');
					}
					
					var imageListLeft = getComputedStyle(this.parentNode).left;
					this.parentNode.style.left = parseFloat(imageListLeft.split('p')[0]) + containerWidth * 0.55 + 'px';
					resizeImages();
				}
				else if(this.classList.contains('js-image-right')) {
					this.classList.remove('js-image-right');
					this.classList.add('js-image-main');
					this.classList.add('css-image-main');
					this.previousElementSibling.classList.remove('js-image-main');
					this.previousElementSibling.classList.remove('css-image-main');
					this.previousElementSibling.classList.add('js-image-left');
					if(this.previousElementSibling.previousElementSibling) {
						this.previousElementSibling.previousElementSibling.classList.remove('js-image-left');
					}
					if(this.nextElementSibling) {
						this.nextElementSibling.classList.add('js-image-right');
					}
					
					var imageListLeft = getComputedStyle(this.parentNode).left;
					this.parentNode.style.left = parseFloat(imageListLeft.split('p')[0]) - containerWidth * 0.55 + 'px';
					resizeImages();
				}
			});
		}
	}
	
	function resizeImages(){
		var mobileMainImage = document.querySelectorAll('.js-image-main');
		
		for (var i = 0; i < mobileClickImage.length; i++) {
			mobileClickImage[i].style.width = containerWidth / 2 + 'px';
		}
		for (var i = 0; i < mobileMainImage.length; i++) {
			mobileMainImage[i].style.width = containerWidth * 0.75 + 'px';
		}
	}
}

//------------------------------------------------prices------------------------------------------------//

var priceShowBox = document.querySelectorAll('.price-show');

for (var i = 0; i < priceShowBox.length; i++) {
	priceShowBox[i].addEventListener('click', function() {
		if(this.classList.contains('price-show-active')){
			this.classList.remove('price-show-active');
			this.nextElementSibling.classList.remove('price-table-block-active');
		}
		else{
			this.classList.add('price-show-active');
			this.nextElementSibling.classList.add('price-table-block-active');
		}
	});
}

//-------------------------------------------------services---------------------------------------------//
var serviceType = document.querySelectorAll('.service-type');
var serviceItem = document.querySelectorAll('.service-item');

for (var i = 0; i < serviceType.length; i++) {
	serviceType[i].addEventListener('click', function(evt){
		if (!this.classList.contains('active')) {
			this.parentElement.querySelector('.active').classList.remove('active');
			this.classList.add('active');
			
			for (var i = 0; i < serviceItem.length; i++) {
				if (serviceItem[i].dataset.number === this.dataset.number){
					serviceItem[i].parentElement.querySelector('.active').classList.remove('active');
					serviceItem[i].classList.add('active');
				}
			}
		}
	});
}

//----------------------------------------------video----------------------------------------------------//
var videoShareButtons = document.querySelectorAll('.video-share-button');
var videoShareBlocks = document.querySelectorAll('.video-share-block');
var videosNavigationItem = document.querySelectorAll('.videos-navigation-list li');

for (var i = 0; i < videoShareButtons.length; i++) {
	videoShareButtons[i].addEventListener('click', function(evt){
		evt.preventDefault();
		var videoShareBlock = this.parentElement.parentElement.querySelector('.video-share-block');
		videoShareBlock.classList.add('video-share-block-show');
	});
}
document.body.addEventListener('click', function(evt){
	if (evt.target.closest('.video-share-button')) return;
	else if (evt.target.closest('.video-share-block')) return;
	for (var i = 0; i < videoShareBlocks.length; i++) {
		videoShareBlocks[i].classList.remove('video-share-block-show');
	}
});
for (var i = 0; i < videosNavigationItem.length; i++) {
	videosNavigationItem[i].addEventListener('click', function(){
		var videosNavigationItemActive = this.parentElement.querySelector('.active');
		videosNavigationItemActive.classList.remove('active');
		this.classList.add('active');
	});
}

//----------------------------------------------video----------------------------------------------------//

var photosNavigationItem = document.querySelectorAll('.photos-navigation-list li');

for (var i = 0; i < photosNavigationItem.length; i++) {
	photosNavigationItem[i].addEventListener('click', function(){
		var photosNavigationItemActive = this.parentElement.querySelector('.active');
		photosNavigationItemActive.classList.remove('active');
		this.classList.add('active');
	});
}