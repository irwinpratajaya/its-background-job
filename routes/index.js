var express = require('express');
var router = express.Router();
var kue = require('kue')
var queue = kue.createQueue();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {

  var job = queue.create('send', {
    from: 'Hacktiv8 <testmail@hacktiv8.com>',
    to: req.body.email,
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  }).save( function(err, job){
    if (err) console.log(err);
    else if( !err ) console.log( 'email has been sent to: ' + req.body.email ); res.redirect('/');
  })
})

module.exports = router;
