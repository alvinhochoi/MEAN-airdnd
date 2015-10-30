var Event = mongoose.model('Event');

module.exports = (function(){
	return {
		getAll: function(request, response){
			Event.find({}, function(err, records){
				if(err) { return response.json(false); }
				else { return response.json(records); }
			})
		},
		getOne: function(request, response){
			// console.log(request.params.id);
			Event.findOne({_id: request.params.id}, function(err, record){
				// console.log(record);
				if(err) { return response.json(false); }
				else { return response.json(record); }
			})
		},
		getChefEvents: function(request, response){
			// console.log(request.session.email);
			Event.find({email: request.session.email}, function(err, records){
				// console.log('*******', records);
				if(err) { console.log('error'); return response.json(false); }
				else { console.log('returning records'); return response.json(records); }
			})
		},
		create: function(request, response){
			var newEvent = new Event({
					email: request.session.email,
					name: request.body.name,
					title: request.body.title,
					cuisine: request.body.cuisine,
					date: request.body.date,
					time: request.body.time,
					location: request.body.location,
					guests: request.body.guests,
					price: request.body.price,
					description: request.body.description,
					menu: request.body.menu,
					duration: request.body.duration,
					url: request.body.url,
					pic: request.body.pic
			});
			newEvent.save(function(err){
				if(err) { return response.json(false); }
				else {
					io.emit('updateAll');
					return response.json(true); }
			})
		},

		update: function(request, response){
			console.log('server',request.params.id);
			console.log('server',request.body);

			Event.findOneAndUpdate({_id:request.params.id},
				{$set:{	name: request.body.name,
					title: request.body.title,
					cuisine: request.body.cuisine,
					date: request.body.date,
					time: request.body.time,
					location: request.body.location,
					guests: request.body.guests,
					price: request.body.price,
					description: request.body.description,
					menu: request.body.menu,
					duration: request.body.duration,
					url: request.body.url,
					pic: request.body.pic}},
					{new:true}, function(err, record){
						console.log(err);
				if(err) { return response.json(false); }
				else { return response.json(record); }
			})
		},

		destroy: function(request, response){
			Event.remove({_id: request.params.id}, function(err){
				if(err) { return response.json(false); }
				else { return response.json(true); }
			})
		}
	}

})();
