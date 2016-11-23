var express = require('express');
var router = express.Router();

var Revive = require('../models/revive');
var Launch = require('../models/launch');

/* GET home page. */
router.get('/', function(req, res, next) {
  Revive.find({}, function (err, revives) {
    if(err) {
      console.log(err)
    } else {
      Launch.find({}, function (err, launches) {
        if(err) {
          console.log(err)
        } else {
          res.render('pages/index', {revives: revives, launches: launches});
        }
      });
    }
  });
});

router.get('/pages/howitworks', function(req, res, next) {
  res.render('pages/howitworks');
});

router.get('/pages/guidelines', function(req, res, next) {
  res.render('pages/guidelines');
});

router.get('/pages/faq', function(req, res, next) {
  res.render('pages/faq');
});

// router.get('/pages/campaign', function(req, res, next) {
//   res.render('pages/campaign');
// });



module.exports = router;


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/users/login');
}
