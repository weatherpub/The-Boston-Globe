define(['./axios', './vue', './init'],
    function (axios, vue, init) {

        //var api = api.getMapBoxAPI(); 

		new vue({
			el: '#map',
			data() {
				return {
					map: null 
				}
			},

            /*
            mapboxgl.accessToken = 'pk.eyJ1IjoiYmluYXJ5dGhpbmtlciIsImEiOiJjaW9ocmhpanUwMDhxdHNtMXA0bjdoYnd3In0.1fLJ9SuR3rSW8lueJeaurg';
            new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [-74.5, 40], // starting position [lng, lat]
                zoom: 9 // starting zoom
            });
            */


			//this needs a loop to render out the days, don't forget the outer div or ul tag
			template: `<div>
							<div class="row">
								<!--<div class="col-12" v-for="f in fct">{{f.description}}</div> -->
							</div>
						</div>`,
			mounted() {
				axios.get(api).then(response => (
					this.map = response.data.dailyForecasts.forecastLocation.forecast
				)).catch(function (error) {
					console.log(error)
				}).then(function () {
					console.log("Forecast Module");
				})
			}
		})
    }
);
