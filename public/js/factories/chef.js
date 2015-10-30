app.factory('ChefFactory', function($http){
	var factory = {};
	var chef;

	factory.chefInfo = function(callback){
		$http.get('/getChef').success(function(response){
			console.log('reloading', response);
			chef = response;
			callback(response);
		})
	}


	factory.addNewChef = function(newChef, callback){
		$http.post('/chefs', newChef).success(function(response){
			chef = response;
			callback();
		})
	}

	factory.loginChef = function(chef, callback){
		$http.post('/loginChef', chef).success(function(response){
			if(!response)
				console.log('failed');
			else{
				chef = response;
				callback();
			}
		})
	}

	factory.updateInfo = function(chefInfo, callback){
		$http.post('/chefsEdit', chefInfo).success(function(response){
			chef = response;
			callback();
		})
	}



	return factory;
})
