var express = require('express');
var router = express.Router();
var handler;
var WEEKDAYS = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

module.exports = (app) => {
  app.use('/weather', router);
  handler = require('../handlers/weather.handler')(app.locals.API_KEY, {});
};

/**
 * Weather REST API Endpoints
 */
router.get('/', function (req, res) {
  res.render('root');
});

router.get('/:location', function (req, res, next) {
  let locName = req.params.location;
  let result = handler.getForecast(locName, 'loadForecast');

  result.then(result =>
    res.json(result)
  )
});

router.get('/:location/today', function (req, res) {
  let locName = req.params.location;
  let result = handler.getForecast(locName, 'loadCurrent');

  result.then(result =>
    res.json(result)
  )
});

router.get('/:location/:weekday', function (req, res) {
  let locName = req.params.location;
  let weekday = req.params.weekday;

  if(!WEEKDAYS.includes(weekday.toUpperCase())) {
    return res.send("Not a valid weekday");
  }

  let result = handler.getForecastInTime(locName, weekday);
  result.then(result =>
    res.json(result)
  )
});




