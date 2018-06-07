var express = require('express');
var router = express.Router();

module.exports = (app) => {
  app.use('/', router)
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/weather');
});
