var events = require('../controllers/events.js');
var chefs = require('../controllers/chefs.js');
var users = require('../controllers/mains.js');
var diner = require('../controllers/diners.js');

module.exports = function(app){

	app.get('/getChef', chefs.get );
	app.post('/loginChef', chefs.getOne );
	app.post('/chefs', chefs.create );
	app.post('/chefsEdit', chefs.update );

	app.get('/chefEvents', events.getChefEvents );

	app.get('/events', events.getAll );
	app.get('/events/:id', function(request, response) { events.getOne(request, response)} );
	app.post('/events', events.create );
	app.post('/eventEdit/:id', function(req, res){ console.log(req._id); events.update(req, res)});
	app.delete('/events/:id', function(request, response) { events.destroy(request, response)} );

	app.get('/apps', function(request, response) { users.index(request, response) }) /* Index */
	app.post('/apps', function(request, response) { users.create(request, response);})	 /* Create */
	app.delete('/apps/:id', function(request, response) {users.destroy(request, response);})

	app.get('/location', function(request, response) {users.location(request, response)})
	app.get('/cusine', function(request, response) {users.cusine(request, response)})
	app.get('/chef', function(request, response) {users.chef(request, response)})

	app.post('/diner', function(request, response) { diner.create(request, response);})
	app.post('/logdiner', function(request, response) { diner.getOne(request, response)})	 /* Create */
	app.get('/getDiner', function(request, response) {diner.getit(request, response)});	 /* Create */
};
