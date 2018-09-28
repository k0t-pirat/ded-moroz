
var topLinks = document.querySelectorAll('.top-links-list .item-wrapper');
var showActor = document.querySelectorAll('.actors-list .item-wrapper');
var showCostume = document.querySelectorAll('.costumes-list .item-wrapper');
var showPromoVideo = document.querySelectorAll('.promo-videos .video-wrapper, .promo-videos .video-title');
var showContentVideo = document.querySelectorAll('.content-videos .video-wrapper');
var showCallBack = document.querySelector('.promo-callback button');
var showCallBackFooter = document.querySelector('.footer-phone-order a');
var popupActor = document.querySelector('.actors-popup');
var popupVideo = document.querySelector('.video-popup');
var popupLayer = document.querySelector('.popup-layer');
var popupClose = document.querySelector('.popup-container .actors-popup-close');

var imageAddItem = document.querySelectorAll('.image-add-item');
var imageNumber = 1;

var videoFrame = document.getElementById('video-frame');

//-------------------------------------------------validation--------------------------------------------------------

var orderButton = document.querySelectorAll('.order-form input[type=submit], .footer-order-form input[type=submit]');
for (var i = 0; i < orderButton.length; i++) {
	orderButton[i].addEventListener('click', function(evt){
		evt.preventDefault();
		var orderName = this.parentNode.querySelector('input[name=name]');
		var orderPhone = this.parentNode.querySelector('input[name=phone]');
		
		if(!orderName.value){
			orderName.classList.add('invalid-form');
			return;
		}
		orderName.classList.remove('invalid-form');
		
		if(!orderPhone.value){
			orderPhone.classList.add('invalid-form');
			return;
		}
		orderPhone.classList.remove('invalid-form');
	});
}

//-----------------------------------------------------------popup logic------------------------------------------------


showCallBack.addEventListener('click', function(evt){
	evt.preventDefault();
	popupActor.classList.add('show-popup');
	popupLayer.classList.add('show-popup');
});
showCallBackFooter.addEventListener('click', function(evt){
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

for (var i = 0; i < showPromoVideo.length; i++) {
	showPromoVideo[i].classList.add('promo-video-' + Math.floor(i / 2));
	showPromoVideo[i].addEventListener('click', showVideoPopup);
}
for (var i = 0; i < showContentVideo.length; i++) {
	showContentVideo[i].classList.add('content-video-' + i);
	console.log(showContentVideo[i]);
	showContentVideo[i].addEventListener('click', showVideoPopup);
}
function showVideoPopup(evt) {
	evt.preventDefault();
	var frameLink;
	popupVideo.classList.add('show-popup');
	popupLayer.classList.add('show-popup');
	
	if(this.classList.contains('promo-video-0')) frameLink = 'THBBVnZ1-r4';
	else if(this.classList.contains('promo-video-1')) frameLink = 'r6zAoTCJ_rE';
	else if(this.classList.contains('promo-video-2')) frameLink = 'n8KsXCAfx1o';
	else if(this.classList.contains('promo-video-3')) frameLink = 'FeUlbqou7Is';
	else if(this.classList.contains('promo-video-4')) frameLink = 'j-e1qiK8U2A';
	else if(this.classList.contains('promo-video-5')) frameLink = 'w4-XP5twZFs';
	else if(this.classList.contains('promo-video-6')) frameLink = 'pr0FKlq6koI';
	else if(this.classList.contains('promo-video-7')) frameLink = 'UO1UMpoQkYE';
	else if(this.classList.contains('promo-video-8')) frameLink = '3nGLXna0GRc';
	else if(this.classList.contains('promo-video-9')) frameLink = 'adq-XT1-JQk';
	
	else if(this.classList.contains('content-video-0')) frameLink = 'adq-XT1-JQk';
	else if(this.classList.contains('content-video-1')) frameLink = 'nfwWHJvRHYs';
	else if(this.classList.contains('content-video-2')) frameLink = '8ePnMqeZXgk';
	else if(this.classList.contains('content-video-3')) frameLink = 'iG01yp-CRr0';
	else if(this.classList.contains('content-video-4')) frameLink = '';
	else if(this.classList.contains('content-video-5')) frameLink = 'Mb5wbbHIqY4';
	else if(this.classList.contains('content-video-6')) frameLink = 'n8KsXCAfx1o';
	else if(this.classList.contains('content-video-7')) frameLink = 'jQ3MRogns5E';
	else if(this.classList.contains('content-video-8')) frameLink = 'yEtYV5Sj2CY';
	else if(this.classList.contains('content-video-9')) frameLink = 'v52pIe9hCZI';
	else if(this.classList.contains('content-video-10')) frameLink = 'w4-XP5twZFs';
	else if(this.classList.contains('content-video-11')) frameLink = 'SvSLA_QVrnQ';
	else if(this.classList.contains('content-video-12')) frameLink = '5qiwSZS0nFY';
	else if(this.classList.contains('content-video-13')) frameLink = 'S4tlMnWx3yo';
	
	videoFrame.src = 'https://www.youtube.com/embed/' + frameLink;
}

popupLayer.addEventListener('click', function(){
	popupActor.classList.remove('show-popup');
	popupVideo.classList.remove('show-popup');
	popupLayer.classList.remove('show-popup');
	videoFrame.src = '';
});
popupClose.addEventListener('click', function(){
	popupActor.classList.remove('show-popup');
	popupLayer.classList.remove('show-popup');
});

//---------------------------------------------------top-order change image-------------------------------------------------//

var orderImageLink = document.querySelectorAll('.top-order-list-description a');

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

//------------------------------------------------adding actors and costumes pictures------------------------------------------------------------//

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
		for (var i = 0; i < showPromoVideo.length; i++) {
			showPromoVideo[i].removeEventListener('click', showVideoPopup);
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

//-------------------------------------------iframe--------------------------------------------------------//

