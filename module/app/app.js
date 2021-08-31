requirejs.config({
	baseUrl: 'app',
	paths: {
		axios: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min',
		backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone',
		bootstrap: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min',
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
		lodash: 'https://raw.githubusercontent.com/lodash/lodash/4.17.15-npm/lodash',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min',
		vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue',

		config: 'config',
		forecast: 'forecast',
		hourly: 'hourly', 
		init: 'init',
		//map: 'mapbox',
		payload: 'observation',
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	}
});

require(['config'], function () {
	requirejs(['axios', 'backbone', 'bootstrap', 'config', 'forecast', 'hourly', 'jquery', 'underscore', 'vue', 'payload', 'init'],
		function (axios, backbone, bootstrap, config, forecast, hourly, $, _, vue, payload, init) {})
})