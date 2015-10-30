app.controller('DinerController', function($location, DinerFactory) {
	var that = this;

	// this.updateInfo = function(chefInfo){
	// 	ChefFactory.updateInfo(chefInfo, function(response){
  //
	// 	})
	// }

	function getDiner(){
		DinerFactory.getDiner(function(diner){
			that.diner = diner;
			console.log('get',diner);
		})
	}
	getDiner();

	this.addDiner = function(newDiner){
		console.log(newDiner);
		DinerFactory.addDiner(newDiner, function(response){
			if(response){
				console.log('back',response);
				// DinerFactory.setDiner(response);
        that.diner = response;
				$location.path('/main');
				getDiner();
      }
      else{
        console.log('not sent');
      }
		})
	}

  this.logDiner = function(diner){
		console.log('WHAT',diner);
    DinerFactory.logDiner(diner, function(response){
			console.log(response);
      if(response){
				that.diner = response;
        $location.path('/main');
      }
      else{
        console.log('no good');
      }
    })
  }

});
