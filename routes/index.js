var express = require('express');
var router = express.Router();
var accuweather = require('node-accuweather')()('HackPSU2018');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HackPSU 2018' });
});

router.post('/form', function(req, res, next){
  var location = req.body.location;
  accuweather.getCurrentConditions(location)
  .then(function(result) {
    var temp = result.Temperature;
    if (temp < 50){
    res.render('res', { title: temp + "😑" });
  }
  else if (temp >= 50 && temp <= 75) {
    res.render('res', { title: temp + "😝" });
  }
  else{
    res.render('res', { title: temp +"🤒" });
  }
  });
});


module.exports = router;
