'use strict';

import express from 'express';
import consign from 'consign'; 

module.exports = () => {
    const app = express();
    
    // consign module does the following:
    // - adds the dir. name as a property of the Express Application object, and these properties all have been referring to object literals
    consign()
        .include('models')
        // {
		//     findAll: (params, callback) => {
		//	       return callback([
		//		       {title: 'Buy some shoes'}, 
		//		       {title: 'Fix notebook'}
		//	       ]);
		//     }
	    // };
        .then('libs/middlewares.js')
        // app.set('port', 8080);
		// app.set('json spaces', 4);
        .then('routes')
        // app.get('/', (req, res) => {
    	//     res.json({
    	//	       status: 'NTask API'
    	//     });
        // });

 		// const Tasks = app.models.tasks;
		// app.get('/tasks', (req, res) => {
 		//     Tasks.findAll({}, (tasks) => {
 		//         res.json({tasks: tasks});
 		//     });
 		// });
        .then('libs/boot.js')
        // app.listen(app.get('port'), () => {
		//     console.log(`NTask API - Port ${app.get('port')}`);
		// });
        // finally, cosign will pass
        .into(app);

    console.log(app);
};