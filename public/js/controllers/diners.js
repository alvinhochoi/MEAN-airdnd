app.controller('DinerController', function($location, DinerFactory) {
	var that = this;

	function getDiner(){
		DinerFactory.getDiner(function(diner){
			that.diner = diner;
			console.log('get',diner);
		})
	}
	getDiner();

	this.addDiner = function(newDiner){
		DinerFactory.addDiner(newDiner, function(response){
			if(response){
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
    	DinerFactory.logDiner(diner, function(response){
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