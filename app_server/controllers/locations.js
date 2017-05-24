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
  res.render('location-info', { 
  	title: 'Золотая Устрица',
  	  pageHeader: {
            title: 'Золотая Устрица'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Золотая Устрица',
            address: 'Санкт-Петербург ул. Савушкина дом 105',
            rating: 2,
            facilities: ['Hot drinks', 'Premium wifi'],
            coords: {
                lat: 37.4425930,
                lng: -89.0725160
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    }); 
};
/* GET home page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};