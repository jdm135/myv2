var express = require('express');
var router = express.Router();

var Revive = require('../models/revive');
var Launch = require('../models/launch');
var User = require('../models/user');


// *************** REVIVE **************

// GET ALL REVIVES

router.get('/revive', isLoggedIn, function(req, res, next) {
  Revive.find({}, function (err, revives) {
    if(err) {
      console.log(err)
    } else {
      res.render('campaigns/revive', {revives: revives});
    }
  });
});

// POST A REVIVE (CREATE)

router.post('/revive', isLoggedIn, function(req, res, next) {
  var reviveShowName = req.body.reviveShowName;
  var reviveGoal = req.body.reviveGoal;
  var reviveTitle = req.body.reviveTitle;
  var revivePhoto = req.body.revivePhoto;
  var reviveVideo = req.body.reviveVideo;
  var reviveStory = req.body.reviveStory;
  var author = {
    id: req.user._id,
    username: req.user.firstName
  };
  var newRevive = {reviveShowName: reviveShowName, reviveGoal: reviveGoal, reviveTitle: reviveTitle, revivePhoto: revivePhoto, reviveVideo: reviveVideo, reviveStory: reviveStory, author: author};
  Revive.create(newRevive, function(err, newlyCreatedRevive) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/users/dashboard');
    }
  });
});

//RENDER REVIVE FORM

router.get('/revive/new', isLoggedIn, function(req, res, next) {
  res.render('campaigns/new_revive');
});

router.get('/add_signature', function(req, res, next) {
  res.render('campaigns/add_signature');
});

router.get('/ask_question', function(req, res, next) {
  res.render('campaigns/ask_question');
});

router.get('/report_campaign', function(req, res, next) {
  res.render('campaigns/report_campaign');
});



// REVIVE SHOW PAGE

router.get('/revive/:id', function(req, res, next) {
  Revive.findById(req.params.id, function(err, foundRevive) {
    if(err) {
      console.log(err);
    } else {
      res.render('campaigns/show_revive', {revive: foundRevive});
    }
  });
});

// DELETE REVIVE

router.delete('/revive/:id', isLoggedIn, function(req, res) {
  Revive.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.redirect('/users/dashboard');
    } else {
      res.redirect('/users/dashboard');
    }
  });
});




// ******************** LAUNCH **********************

// GET ALL LAUNCHES

router.get('/launch', isLoggedIn,function(req, res, next) {
  Launch.find({}, function (err, launches) {
    if(err) {
      console.log(err)
    } else {
      res.render('campaigns/launch', {launches: launches});
    }
  });
});

// POST A LAUCH (CREATE)

router.post('/launch', isLoggedIn, function(req, res, next) {
  var launchShowName = req.body.launchShowName;
  var launchGoal = req.body.launchGoal;
  var launchTitle = req.body.launchTitle;
  var launchPhoto = req.body.launchPhoto;
  var launchVideo = req.body.launchVideo;
  var launchStory = req.body.launchStory;
  var author = {
    id: req.user._id,
    username: req.user.firstName
  };
  var newLaunch = {launchShowName: launchShowName, launchGoal: launchGoal, launchTitle: launchTitle, launchPhoto: launchPhoto, launchVideo, launchStory: launchStory, author: author};
  Launch.create(newLaunch, function(err, newlyCreatedLaunch) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/users/dashboard');
    }
  });
});

// RENDER LAUNCH FORM

router.get('/launch/new', isLoggedIn, function(req, res, next) {
  res.render('campaigns/new_launch');
});

router.get('/fund_campaign', function(req, res, next) {
  res.render('campaigns/fund_campaign');
});

// LAUNCH SHOW PAGE

router.get('/launch/:id', function(req, res, next) {
  Launch.findById(req.params.id, function(err, foundLaunch) {
    if(err) {
      console.log(err);
    } else {
      res.render('campaigns/show_launch', {launch: foundLaunch});
    }
  });
});

// LAUNCH DELETE

router.delete('/launch/:id', isLoggedIn, function(req, res) {
  Launch.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.redirect('/users/dashboard');
    } else {
      res.redirect('/users/dashboard');
    }
  });
});



module.exports = router;


// MIDDLEWARE

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/users/login');
}
