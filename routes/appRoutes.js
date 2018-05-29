'use strict';

module.exports = function(app) {
	var appController = require('../controller/appController');

	// todoList Routes
	app.route('/')
		.get(appController.home);

// app.route('/rss/:param1')
// 	.get(appController.rss);
//
// app.route('/twitter/:param1')
// 			.get(appController.twitter);

};
