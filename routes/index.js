var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  	{ 
  		title: 'Thermosa Photography',
  		photos: [
  		//Pattern: Small, Large, Small, Large, Large, Small
  			{
  				"file_name": "christmas-tree/DSC_6168.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			{
  				"file_name": "christmas-tree/DSC_4849.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "christmas-tree/DSC_4883.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			{
  				"file_name": "christmas-tree/DSC_5787.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "christmas-tree/DSC_5834.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "christmas-tree/DSC_5989.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  		]

  	});
});

router.get('/portfolio-all', function(req, res, next) {
  res.render('portfolio-all', 
  	{ 
  		title: 'All Photos',
  		//Type 1 = Family
  		photos: [
  		//Pattern: Small, Large, Small, Large, Large, Small
  			{
  				"file_name": "christmas-tree/DSC_6168.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			{
  				"file_name": "christmas-tree/DSC_4849.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "christmas-tree/DSC_4883.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			{
  				"file_name": "christmas-tree/DSC_5787.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "christmas-tree/DSC_5834.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "christmas-tree/DSC_5989.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			//round 2
  			{
  				"file_name": "portfolio/DSC_2075.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			{
  				"file_name": "portfolio/DSC_3068.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "portfolio/DSC_2137.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			{
  				"file_name": "portfolio/DSC_3493.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "portfolio/DSC_6518.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "portfolio/DSC_2161.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			//round 3
  			{
  				"file_name": "portfolio/DSC_6647.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				
  				"file_name": "portfolio/DSC_3428.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			{
  				"file_name": "portfolio/DSC_3522.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			{
  				"file_name": "portfolio/DSC_7502.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "portfolio/DSC_7774.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "portfolio/DSC_3965.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  		]
  	}
  	);
});

router.get('/portfolio-portraits', function(req, res, next) {
  res.render('portfolio-portraits', 
  	{ 
  		title: 'Portraits',
  		subtitle: 'Test'
  	 }

  	);
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
  res.render('503-page', { title: '503 Error' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contact Info' });
});

router.get('/about-me', function(req, res, next) {
  res.render('about-me', 
  	{ 
  		title: 'Thermosa Photography',
  		photos: [
  		//Pattern: Small, Large, Small, Large, Large, Small
  			{
  				"file_name": "christmas-tree/DSC_6168.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			{
  				"file_name": "christmas-tree/DSC_4849.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "christmas-tree/DSC_4883.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  			{
  				"file_name": "christmas-tree/DSC_5787.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "christmas-tree/DSC_5834.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 464,
  				"large": "thumbnail-corporate-lg"
  			},
  			{
  				"file_name": "christmas-tree/DSC_5989.jpg",
  				"photo_title": "Christmas Mini Session",
  				"photo_text": "test text",
  				"photo_type": "Type 1",
  				"photo_width": 370,
  				"photo_height": 276,
  				"large": ""
  			},
  		]

  	});
});

module.exports = router;
