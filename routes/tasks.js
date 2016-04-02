'use strict';

const Task = require('../models/task');

module.exports = (app) => {

	app.get('/tasks', (req, res) => {
       	Task.find({}, (err, tasks) => {
			if (err) {
				res.send(err);
			} else {
				res.json({
        			tasks: tasks 
        		});
			}
		});
    });

};