var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);
//var homepageController = function (reg, res) {
	//res.render('index',{title:'Express'});
//};
//router.get('/', homepageController );
module.exports = router;
