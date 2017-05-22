/* GET home page */
module.exports.homelist = function(req, res){
  res.render('locations-list', { 
        title: 'Loc8r - find a place to work with wifi',
        string: 'Глядя на Wi-Fi и сиденье? Loc8r поможет вам найти места, чтобы работать, когда и о. Может быть, с кофе, пирожное или пинту? Пусть Loc8r поможет вам найти место, которое вы ищете for.elp вам найти место, которое вы ищете.',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Найти места для работы с Wi-Fi рядом с вами!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Степашка',
            address: 'Санкт-Петербург ул. Гагарина дом 5',
            rating: 3,
            facilities: ['Напитки', 'Горячия еда', 'Премиум Wi-Fi'],
            distance: '150m'
        }, {
            name: 'У Хрюшки и степашки',
            address: 'Санкт-Петербург ул. Вепра дом 1050',
            rating: 2,
            facilities: ['Напитки', 'Горячия еда', 'Премиум Wi-Fi'],
            distance: '200m'
        }, {
            name: 'Золотая Устрица',
            address: 'Санкт-Петербург ул. Савушкина дом 105',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
 };
/* GET home page */
module.exports.locationsInfo = function(req, res){
  res.render('location-info', { title: 'locations info' });
};
/* GET home page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
};