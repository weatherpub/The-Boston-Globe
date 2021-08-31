define(function () {
	let wrapper = document.createElement('div');
	wrapper.id = 'wrapper';
	wrapper.className = 'row g-0';

	let map_css = document.createElement('link');
	map_css.type = "text/css";
	map_css.rel = "stylesheet";
	map_css.href = "https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css";
	document.getElementsByTagName('head')[0].appendChild(map_css);

	let horizontalScroll = document.createElement("link");
	horizontalScroll.type = "text/css";
	horizontalScroll.rel = "stylesheet";
	horizontalScroll.href = "/module/css/horizontal-scroll.css";

	let mapbox = document.createElement('div');
	mapbox.id = "map";
	mapbox.style = "height: 300px; width: 300px;";
  
	let mod = document.createElement('div');
	mod.id = 'mod';
	mod.className = 'col-sm-4 col-xs-12 col-sm-12';
	mod.style = "background-color: #c00; border: 1px; border-radius: 5px; padding: 10px;";

	let region = document.createElement('span');
	region.id = 'region';
	region.style = 'color: #fff; font-size: 20px';

	let state = document.createElement('span');
	state.id = 'state';
	state.style = 'color: #fff; font-size: 20px';

	let icon = document.createElement('span');
	icon.id = 'icon';
	icon.style = 'margin: 0 20px 0 0';

	let temp = document.createElement('span');
	temp.id = 'temp';
	temp.style = 'color: #fff; font-size: 26px';
	temp.className = 'col-4';

	let scale = document.createElement('span');
	scale.id = 'scale';
	scale.style = 'color: #fff; font-size: 14px';
	scale.className = 'col-2';

	let choice = document.createElement('span')
	choice.id = 'choice';
	choice.style = 'border: 1px solid #c00';
	choice.innerHTML = '{{msg}}';

	let row = document.createElement('span')

	let condition = document.createElement('span');
	condition.id = 'condition';
	condition.style = 'color: #fff; font-size: 16px';
	condition.className = 'col-8';

	let forecast = document.createElement('div');
	forecast.id = 'forecast';

	let hourly = document.createElement('div');
	hourly.id = 'hourly';

	let component = document.createElement('div');
	component.id = 'component';
	
	let changeFCT = document.createElement('div');
	changeFCT.id = 'chgFCT';

	document.getElementsByTagName("head")[0].appendChild(map_css);
	document.getElementsByTagName("head")[0].appendChild(horizontalScroll); //the  problem is here
	document.getElementById('content').appendChild(wrapper);
	document.getElementById('wrapper').appendChild(mod);

	let m = document.getElementById('mod');

	m.append(region);
	m.append(changeFCT);
	m.append(forecast);
	m.append(hourly);
	m.append(component);
	m.append(mapbox);
});
