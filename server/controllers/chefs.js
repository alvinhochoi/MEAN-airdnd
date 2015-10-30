var Chef = mongoose.model('Chef');

module.exports = (function(){
	return {
		get: function(request, response){
			Chef.findOne({email: request.session.email}, function(err, record){
				return response.json(record);
			})
		},
		getOne: function(request, response){
			Chef.findOne({email: request.body.email}, function(err, record){
				if(err || !record) { return response.json(false); }
				else if(request.body.password != record.password) { return response.json(false); }
				else {
					request.session.email = record.email;
					return response.json(record);
				}
			})
		},
		create: function(request, response){
			var newChef = new Chef({
				first_name: request.body.first_name,
				last_name: request.body.last_name,
				email: request.body.email,
				password: request.body.password
			});
			newChef.save(function(err, record){
				if(err) { return response.json(false); }
				else {
					io.emit('updateAll');
					request.session.email = record.email;
					return response.json(record);
				}
			})
		},
		update: function(request, response){
			Chef.findOneAndUpdate({email:request.session.email}, {$set:{bio: request.body.bio, location: request.body.location}}, {new:true}, function(err, record){
				if(err) { return response.json(false); }
				else { return response.json(record); }
			})
		}
	}
})();
