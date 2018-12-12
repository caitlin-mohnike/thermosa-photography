var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('coming-soon', { title: 'Thermosa Photography - Coming Soon!' });
});

router.get('/portfolio-portraits', function(req, res, next) {
  res.render('portfolio-portraits', { title: 'Portraits' });
});

router.get('/portfolio-pets', function(req, res, next) {
  res.render('portfolio-pets', { title: 'Pets' });
});

router.get('/portfolio-events', function(req, res, next) {
  res.render('portfolio-events', { title: 'Events' });
});

router.get('/portfolio-real-estate', function(req, res, next) {
  res.render('portfolio-real-estate', { title: 'Real Estate' });
});

router.get('/portfolio-landscape', function(req, res, next) {
  res.render('portfolio-landscape', { title: 'Landscape' });
});

router.get('/503-page.html', function(req, res, next) {
  res.render('503-page', { title: 'Landscape' });
});

module.exports = router;
