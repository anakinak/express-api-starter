const DarkSkyApi = require('dark-sky-api');
const cities = require("all-the-cities");
const moment = require('moment');

function getCity(cityName) {
    // Take the first matching city
    return cities.filter(city => {
        return city.name.toUpperCase().match(cityName.toUpperCase());
    })[0];
}

function getForecast(cityName, apiCall) {
    let locCity = getCity(cityName);

    if (locCity) {
        let locLat = locCity.lat;
        let locLon = locCity.lon;
        console.log(`Requested weather for lat:${locLat} lon:${locLon}`);

        return DarkSkyApi[apiCall]({ latitude: locLat, longitude: locLon })
            .then(result => {
                return result;
            })
            .catch((error) => { console.trace(error.message); });

    } else {
        return new Promise(function(resolve, reject) {
            resolve("Not a valid city");
        });
    }
}

function getForecastInTime(cityName, weekday) {
    let locCity = getCity(cityName);
    let day = moment().isoWeekday(weekday);

    if (locCity) {
        let locLat = locCity.lat;
        let locLon = locCity.lon;
        console.log(`Requested weather for lat:${locLat} lon:${locLon} day:${day}`);

        return DarkSkyApi.loadTime(day, { latitude: locLat, longitude: locLon })
            .then(result => {
                return result;
            })
            .catch((error) => { 
                console.trace(error);
                return error;
            });

    } else {
        return new Promise(function(resolve, reject) {
            resolve("Not a valid city");
        });
    }
}

module.exports = (key, options) => {
    DarkSkyApi.apiKey = key;
    DarkSkyApi.proxy = true;

    // configure dark sky api, if required 

    return {
        getForecast: getForecast,
        getForecastInTime: getForecastInTime
    }
}