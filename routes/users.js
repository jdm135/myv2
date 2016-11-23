var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var User = require('../models/user');
var Revive = require('../models/revive');
var Launch = require('../models/launch');

var csrfProtection = csrf();
router.use(csrfProtection);



router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

// router.get('/dashboard', isLoggedIn, function(req, res) {
//     res.render('users/dashboard', {currentUser: req.user});
// });

router.get('/dashboard', isLoggedIn, function(req, res, next) {
  Revive.find({'author.id' :req.user._id}, function (err, revives) {
    if(err) {
      console.log(err)
    } else {
      Launch.find({'author.id' :req.user._id}, function (err, launches) {
        if(err) {
          console.log(err)
        } else {
          res.render('users/dashboard', {currentUser: req.user, revives: revives, launches: launches});
        }
      });
    }
  });
});

//     Revive.find({'author.id' :req.user._id}, (err, revives) => {
//        if(err) {
//          console.log(err);
//        } else {
//          res.render('users/dashboard', {currentUser: req.user, revives: revives});
//        }
//     });
// });




router.get('/settings', isLoggedIn, function(req, res, next) {
  res.render('users/settings', {currentUser: req.user});
});


router.get('/signup', function(req, res, next) {
  var messages = req.flash('error');
  res.render('users/signup', {csrfToken: req.csrfToken(), messages: messages});
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/users/dashboard',
  failureRedirect: '/users/signup',
  failureFlash: true
}));

router.get('/login', function(req, res, next) {
  var messages = req.flash('error');
  res.render('users/login', {csrfToken: req.csrfToken(), messages: messages});
});

router.post('/login', passport.authenticate('local.login', {
  successRedirect: '/users/dashboard',
  failureRedirect: '/users/login',
  failureFlash: true
}));


module.exports = router;


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}
