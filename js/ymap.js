/*var maotRoute = document.querySelectorAll('.maot-route');
console.log(maotRoute);
for (var i = 0; i < maotRoute.length; i++) {
	maotRoute[i].addEventListener('click', function() {
		var maotRouteActive = this.parentElement.querySelector('.maot-route-active');
		maotRouteActive.classList.remove('maot-route-active');
		this.classList.add('maot-route-active');
		
		new_map.destroy();
		ymaps.ready(function(){
			//new_map.destroy();
			var w_map = new ymaps.Map('maotmap', {
				center: [55.776198, 37.675604],
				zoom: 15,
				controls: ['routePanelControl']
			});
			
			var control = w_map.controls.get('routePanelControl');
			
			control.routePanel.state.set({
				type: 'pedestrian',
				fromEnabled: false,
				from: [55.776198, 37.675604],
				toEnabled: false,
				to: [55.772399, 37.678842]
				//to: [55.780033, 37.666032]
			});
		});
	});
	
	var routePanel = new ymaps.control.RoutePanel({
		options: { 
			position: { right: 5, top: 10 },
			float: 'right',
			type: 'pedestrian',
			fromEnabled: false,
			from: [55.776198, 37.675604],
			toEnabled: false,
			to: [55.772399, 37.678842]
		}
	}); 
	
	newMap.controls.add(routePanel);
}*/

ymaps.ready(function(){
	var newMap = new ymaps.Map('maotmap', {
		center: [55.776198, 37.675604],
		zoom: 15,
		controls: ['zoomControl']
	});
	newMap.behaviors.disable('scrollZoom');
	newMap.controls.get('zoomControl');
	
	
	newMap.controls.add('routePanelControl', {
		position: { right: 5, top: 10 },
		float: 'right',
		//visible: false
	}); 
	
	var control = newMap.controls.get('routePanelControl');
	
	control.routePanel.state.set({
		type: 'pedestrian',
		fromEnabled: false,
		from: [55.776198, 37.675604],
		toEnabled: false,
		to: [55.772399, 37.678842]
	});
	
	control.routePanel.options.set({
		allowSwitch: true,
		//reverseGeocoding: false,
		types: {masstransit: false, pedestrian: false, pedestrian: true}
	});
	
	var maotRoute = document.querySelectorAll('.maot-route');
	var maotRouteFrom = [];
	for (var i = 0; i < maotRoute.length; i++) {
		maotRoute[i].addEventListener('click', function() {
			var maotRouteActive = this.parentElement.querySelector('.maot-route-active');
			maotRouteActive.classList.remove('maot-route-active');
			this.classList.add('maot-route-active');
			if (this.classList.contains('baum')){
				maotRouteFrom = [55.772399, 37.678842];
			}
			else if (this.classList.contains('ksel')){
				maotRouteFrom = [55.780033, 37.666032];
			}
			else if (this.classList.contains('parking')){
				maotRouteFrom = [55.770033, 37.686032];
			}
			
			control.routePanel.state.set({
				type: 'pedestrian',
				fromEnabled: false,
				from: [55.776198, 37.675604],
				toEnabled: false,
				to: maotRouteFrom
			});
		});
	}
});