var Form = require('../models/form');

module.exports = function(req, res, next) {
	Form.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, user) {
		if (err) throw err;
		console.log('update successifully!');
		Form.find({}, function(err, users) {
			if (err) throw err;

			res.json({userinfos: users});
		});
	});
};
