define(['./axios', './vue', './init', './config'],
	function (axios, vue, init, config) {

		const getAPI = {
			baseURL: "https://weather.ls.hereapi.com/weather/1.0/report.json?",
			key: "z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc",
			product: "observation",
			metric: false,
			zip: 94606,

			apiObservation: function () {
				return this.baseURL + "product=" + this.product + "&oneobservation=" + true + "&apiKey=" + this.key + "&zipcode=" + this.zip + "&metric=" + this.metric;
			}
		}

		const api = getAPI.apiObservation();

		vue.component('metric_weight', {
			props: ['obs'],
			template: `<button>{{obs.temperature}}</button>`
		})

		const scale = { fahrenheit: 'F', celsius: 'C' };

		vue.component('change-forecast', {
			props: ['name'],
			function () {
				return {

				}
			},
			methods: {
				updateFCT: function () {
					this.scale = scale.celsius
					console.log("updateFCT Fired");
				}
			},
			template: '<span v-on:click="updateFCT()">{{name}}</span>'
		})

		new vue({
			el: '#chgFCT'
		})

		new vue({
			el: '#region',
			data() {
				return {
					loc: [],
					obs: [],
				}
			},
			template: `<div>
							<div class="row">
								<div class="col-12">{{loc.city}}, {{loc.state}}</div>
							</div>
							<div class="row no-gutters">
								<div class="col-2"><img v-bind:src='obs.iconLink'></div>
								<div class="col-2"><change-forecast name="F"></change-forecast></div>
								<div class="col-2" v-html="obs.temperature"></div>
								<div class="col-6" v-bind="obs.skyDescription"></div>
							</div>
						</div>`,
			mounted() {
				axios.get(api)
					.then(response => (
						this.loc = response.data.observations.location[0],
						this.obs = response.data.observations.location[0].observation[0]
					)).catch(function (error) {
						console.log(error)
					}).then(function () {
						console.log("Observation Module");
					})
			}
		})
	});
