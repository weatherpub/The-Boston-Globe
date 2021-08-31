define(['./axios', './vue', './init'],
	function (axios, vue, init) {

		const getAPI = {
			baseURL: "https://weather.ls.hereapi.com/weather/1.0/report.json?",
			key: "z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc",
			metric: false,
			zip: 94606,

			apiConcat: function (product, metric) {
				return this.baseURL + "product=" + product + "&apiKey=" + this.key + "&zipcode=" + this.zip + "&metric=" + metric;
			},

			apiForecast: function () {
				return this.apiConcat("forecast_7days_simple", false);
			}
		}

		const api = getAPI.apiForecast();

		vue.component('daily-forecast', {
			props: ['weekday', 'img', 'lowTemp', 'highTemp'],
			template: `<span class="col-4">
						<div>{{weekday}}</div>
						<div><img v-bind:src='img'></div>
						<span>{{highTemp.slice(0,2)}}&deg;&nbsp;/&nbsp;{{lowTemp.slice(0, 2)}}&deg;</span>
					</span>`
		})

		new vue({
			el: '#forecast',
			data() {
				return {
					fct: []
				}
			},
			created: function () {
				console.log("#forecast has been created");
			},
			mounted() {
				axios.get(api).then(response => (
					this.fct = response.data.dailyForecasts.forecastLocation.forecast
				)).catch(function (error) {
					console.log(error)
				}).then(function () {
					console.log("Forecast Module");
				})
			},
			template: `<div>
						<div class="row">
							<div class="col-12">Daily Forecast</div>
						</div>
						<div class="scrollmenu">
							<daily-forecast v-for="f in fct" :key="f.utcTime" :weekday="f.weekday" :img="f.iconLink" v-bind:low-temp="f.lowTemperature" v-bind:high-temp="f.highTemperature"></daily-forecast>
						</div>
					</div>`
		})
	});
