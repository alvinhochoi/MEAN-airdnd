app.factory('EventFactory', function($http){
	var factory = {};

	factory.getAllEvents = function(event, callback){
		$http.get('/events').success(function(response){
			callback(response);
		})
	}

	factory.getChefEvents = function(callback){
		$http.get('/chefEvents').success(function(response){
			// console.log('event factory', response);
			callback(response);
		})
	}

	factory.updateEvent = function(eventInfo, callback){
		$http.post('/eventEdit/'+ eventInfo._id, eventInfo).success(function(response){
			event = response;
			callback();
		})
	}

	factory.getOneEvent = function(event, callback){
		$http.get('/events/' + event.id).success(function(response){
			callback(response);
		})
	}

	factory.addEvent = function(newEvent, callback){
		$http.post('/events', newEvent).success(function(response){
			callback(response);
		})
	}
	factory.destroy = function(event, callback){
		$http.delete('/events/'+ event._id).success(function(response){
			callback();
		});
	}

	return factory;
})
