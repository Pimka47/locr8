/* GET home page */
module.exports.homelist = function(req, res){
  res.render('locations-list', { title: 'Home' });
};
/* GET home page */
module.exports.locationsInfo = function(req, res){
  res.render('location-info', { title: 'locations info' });
};
/* GET home page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
};