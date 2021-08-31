'use strict';

const api = {
    config: {
        baseURL: "https://weather.ls.hereapi.com/weather/1.0/report.json?",
        key: "z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc",
        metric: false,
        zip: 94606,
    },

    apiConcat: function (product, metric) {
        return this.config.baseURL + "product=" + product + "&apiKey=" + this.key + "&zipcode" + this.config.zip + "&metric=" + metric;
    },

    apiObservation: function () {
        product: "observation";
        return this.base + "product=" + this.p + "&oneobservation=" + true + "&apiKey=" + this.key + "&zipcode=" + this.config.zip + "&metric=" + this.config.metric;
    },

    apiForecast: function () {
        return this.apiConcat("forecast_7days_simple", false);
    },

    apiHourly: function () {
        return this.apiConcat("forecast_hourly", false);
    },

    apiMapbox: function () {
        return "https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js";
    }
}

/*
var api = {
    base: "https://weather.ls.hereapi.com/weather/1.0/report.json?",
    key: "z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc",
    metric: false,
    product: "observation",
    zip: 94606,

    getObservationAPI: function() {
        return this.base + "product=" + this.p + "&oneobservation=" + true + "&apiKey=" + this.key + "&zipcode=" + this.zip + "&metric=" + this.metric;
    },

    getForecastAPI: function () {
        this.product = "forecast4_7days_simple";
        return this.base + "product=" + this.product + "&apiKey=" + this.key + "&zipcode=" + this.zip + "&metric=" + "oakland,ca&metric=" + this.metric;
    },

    getHourlyAPI: function () {
    },

    getObservationAPI: function () {
        return this.base + "product=" + this.product + "&oneobservation=" + true + "&apiKey=" + this.key + "&zipcode=" + this.zip + "&metric=" + this.metric;
    },

    getMapBoxAPI: function() {
        return "https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js";
    }
};
*/