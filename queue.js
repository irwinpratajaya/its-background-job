var kue = require('kue')
var queue = kue.createQueue();


var job = queue.create('send', {
  from: 'Hacktiv8 <testmail@hacktiv8.com>',
  to: 'irwinpratajaya@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
}).save( function(err){
   if( !err ) console.log( job.id );
});
