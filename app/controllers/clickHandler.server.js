var Users = require('../models/users.js');

function clickHandler () {


	this.getClicks = function (req, res) {


		Users
			.findOne({ 'github.id': req.user.github.id}, {'_id': false})
			.exec(function (err, result) {
			if (err) { throw err; }

			
			res.json(result.clickCounter);

			
		});

	};


	this.addClick = function (req, res) {
		Users
			.findOneAndUpdate( {'github.id': req.user.github.id }, { $inc: { 'clickCounter.clicks': 1 } })
			.exec(function (err, result) {
				if (err) {
						throw err; 
					}

					res.json(result.clickCounter);
			});
		};


	this.resetClicks =function (req ,res) {
		Users
			.findOneAndUpdate({'github.id': req.user.github.id }, { 'clickCounter.clicks': 0 })
			.exec(function (err, result) {
					if (err) {
						throw err; 
					}

					res.json(result.clickCounter);
				}

			);
		};


	
}

module.exports = clickHandler;