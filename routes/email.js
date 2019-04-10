var express = require('express');
var router = express.Router();
// var app = express();
var Email = require('email').Email

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/send-email', function(req, res) {

  	const msg = {
  		from: "caitlin.mohnike@gmail.com",
  		to: "thermosaphotography@gmail.com",
  		subject: "Contact Request - "+req.body.name[0]+" "+req.body.name[1],
  		text: req.body.message,
  		html: '<strong>'+req.body.message+' '+req.body.from+'</strong>'
  	};
  	sgMail.send(msg, function(){
  		res.send('MF000')
  	});
});

module.exports = router;
