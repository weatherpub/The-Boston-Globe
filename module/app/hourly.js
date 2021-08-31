define(['./axios', './vue', './init'],
	function (axios, vue, init) {

		const getAPI = {
			baseURL: "https://weather.ls.hereapi.com/weather/1.0/report.json?",
			key: "z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc",
			metric: false,
			product: "forecast_hourly",
			zip: 94606,

			apiHourly: function () {
				return this.baseURL + "product=" + this.product + "&apiKey=" + this.key + "&zipcode=" + this.zip + "&metric=" + this.metric;
			},
		};

		const api = getAPI.apiHourly();

		vue.component('hourly-forecast', {
			props: ['weekday', 'time', 'dewpoint'],
			template: `
				<span class="col-4">
					<span>{{weekday.slice(0, 3)}}{{time.slice(5)}}</span>
					<div>{{dewpoint}}%</div>
				</span>
			`,
		})

		new vue({
			el: '#hourly',
			data() {
				return {
					hrly: []
				}
			},
			template: `
						<div>
							<div class="row">
								<div class="col-12" style="font-size: 14px;font-weight: bold;">Hourly Forecast</div>
							</div>
							<div class="scrollmenu">
								<hourly-forecast v-for="h in hrly" v-bind:key="h.utcTime" v-bind:weekday="h.weekday" v-bind:dewpoint="h.dewPoint"></hourly-forecast>
							</div>
						</div>
						`,
			mounted() {
				axios.get(api).then(response => (
					this.hrly = response.data.hourlyForecasts.forecastLocation.forecast
				)).catch(function (error) {
					console.log(error)
				}).then(function () {
					console.log("Hourly Forecast Module");
				})
			}
		})
	});
