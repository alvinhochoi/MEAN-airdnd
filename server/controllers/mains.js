var User = mongoose.model('Event');
// var Order = mongoose.model('Order');
// var Product = mongoose.model('Product');
var errors_array = [];
module.exports = (function() {
	return {
		index: function(request, response){
			// var location = User.find().distinct('location');
			// console.log(location);
			User.find({}, function(err, records){
				response.json(records);
			})
		},


		// create: function(request, response){
		//
	  //     User.find({date: request.body.date}, function(err, records){
		//
	  //         var user = new User();
	  //         user.guest = request.body.guest;
	  //         user.cusine = request.body.cusine;
	  //         user.name = request.body.name;
	  //         user.description = request.body.description;
		// 				user.location = request.body.location;
		// 				user.title = request.body.title;
		// 				user.date = request.body.date;
		// 				user.time = request.body.time;
		// 				user.price = request.body.price;
		// 				user.url = request.body.url;
		// 				user.duration = request.body.duration;
		// 				user.menu = request.body.menu;
		// 				user.pic = request.body.pic;
	  //         user.save(function(err){
	  //           if(err){
	  //             response.json({status:false, error: err});
	  //           }
	  //           else{ return response.json({error:'Event Added Succesfully'}); }
	  //       })
	  //   })
	  // },

		location: function(request, response){
			User.find().distinct('location', function(err, records){
					response.json(records);
			})
		},

		cusine: function(request, response){
			User.find().distinct('cusine', function(err, records){
					response.json(records);
			})
		},
		chef: function(request, response){
			User.find().distinct('name', function(err, records){
					response.json(records);
			})
		},

			destroy: function(request, response){
				// console.log("Server / Ctrl / Users - Destroy")
				// console.log(request.params.id);
				User.remove({_id:request.params.id}, function(err){
					if(err){ response.json(false); }
					else{ response.json(true); }
				})
			},


}
})();
