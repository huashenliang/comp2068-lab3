var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/huashen', (req, res, next) => {
  res.render('huashen', {});
});

router.get('/mysister', (req, res, next) => {
  res.render('sister', {});
});

router.get('/father', (req, res, next) => {
  res.render('father', {});
});

router.get('/mother', (req, res, next) => {
  res.render('mother', {});
});

router.get('/dog', (req, res, next) => {
  res.render('dog', {});
});

module.exports = router;
