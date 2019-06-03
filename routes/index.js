var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/huashen', (req, res, next) => {
  res.render('person', {
    name: 'huashen',
    cityResisding: 'Barrie', 
    job: 'student', 
    countryBorn: 'China', 
  });
});

router.get('/susan', (req, res, next) => {
  res.render('person', {
    name: 'susan',
    cityResisding: 'Barrie', 
    job: 'Desinger', 
    countryBorn: 'China', 
    relation: 'sister'
  });
});

router.get('/shunming', (req, res, next) => {
  res.render('person', {
    name: 'shunming',
    cityResisding: 'Zhongshan', 
    job: 'Businessman', 
    countryBorn: 'China', 
    relation: 'father'
  });
});

router.get('/liqun', (req, res, next) => {
  res.render('person', {
    name: 'liqun',
    cityResisding: 'Barrie', 
    job: 'housewife', 
    countryBorn: 'China', 
    relation: 'mother'
  });
});

module.exports = router;
