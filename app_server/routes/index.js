var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* страницы место положения */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationsInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/about', ctrlOthers.about);

module.exports = router;
