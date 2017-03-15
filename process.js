var kue = require('kue')
var queue = kue.createQueue();

var api_key = 'key-679c07cead6c474165b20f8fec0316a9';
var domain = 'sandboxe9fc2365b6ca4a2d86386265c8bd39c0.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


queue.process('send', function(job, done){
  sendEmail(job.data, done);
  // console.log(job.data);
});

function sendEmail(mail, done) {
  mailgun.messages().send(mail, function (error, body) {
    console.log(body);
  });
  done();
}
