var Form = require('../models/form');

module.exports = function(req, res, next) {
	var Form = new Form({
		'title':req.body.title,
		'content':req.body.content
	});

	form.save(function(err){
		if(err) throw err;
		console.log('create successifully!');
			
		Form.find({}, function(err, users){
			if(err) throw err;
			res.json({userinfos: users});
		});
	});
};
	

