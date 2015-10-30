var Diner = mongoose.model('Diner');
// var Order = mongoose.model('Order');
// var Product = mongoose.model('Product');
var errors_array = [];
module.exports = (function() {
	return {

		getit: function(request, response){
			Diner.findOne({email: request.session.email}, function(err, record){
				return response.json(record);
			})
		},

create: function(request, response){
        // console.log(request.body.first_name);
        var diner = new Diner();
        diner.first_name = request.body.first_name;
        diner.last_name = request.body.last_name;
        diner.email= request.body.email;
        diner.password = request.body.password;
        // console.log(diner);
        diner.save(function(err, record){
          if(err){
            console.log('error');
            response.json(false);
          }
          else{
						request.session.id = record.id;
						request.session.email = record.email;
						// console.log(request.session);
						return response.json(record) ;
					}
      })
  },

	getOne: function(request, response){
		console.log(request.body.email);
		console.log(request.body.password);
		Diner.findOne({email: request.body.email}, function(err, record){
			console.log(record.password);
			if(err || !record) { return response.json(false); }
			else if(request.body.password != record.password) { return response.json(false); }
			else {
				request.session.id = record.id;
				request.session.email = record.email;

				return response.json(record);
			}
		})
	},

	// getOne: function(request, response){
	// 	Chef.findOne({email: request.body.email}, function(err, record){
	// 		if(err || !record) { return response.json(false); }
	// 		else if(request.body.password != record.password) { return response.json(false); }
	// 		else {
	// 			request.session.email = record.email;
	// 			return response.json(record);
	// 		}
	// 	})
	// },

}
})();
