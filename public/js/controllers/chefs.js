app.controller('ChefController', function(ChefFactory, EventFactory, $location, $routeParams){

    var that = this;
    save = false;

    console.log('loading controller');
		console.log($routeParams.id);

    function getChefInfo() {
        ChefFactory.chefInfo(function(response){
            that.chef = response;
        })
    }

		function getChefEvents(){
        EventFactory.getChefEvents(function(response){
            console.log('chef controller', response);
            that.events = response;
        })
    }

		function getOne($routeParams){
			EventFactory.getOneEvent($routeParams, function(response){
				that.event = response;
				// console.log(response);
			})
		}
		if($routeParams){
		getOne($routeParams);
		}

    this.addChef = function(newChef){
        ChefFactory.addNewChef(newChef, function(response){
            $location.path('/chef_dashboard')
        })
    }

    this.loginChef = function(chef){
        ChefFactory.loginChef(chef, function(response){
            $location.path('/chef_dashboard')
        })
    }

    this.updateInfo = function(chefInfo){
        console.log("in the chef controller:", chefInfo)
        ChefFactory.updateInfo(chefInfo, function(response){
            that.save = true;
            getChefInfo();
        })
    }

    this.updateEvent = function(eventinfo){
      console.log(eventinfo)
      EventFactory.updateEvent(eventinfo, function(response){
        	console.log('ccccoooo',response);
          $location.path('/chef_dashboard')
      })
    }

    this.addEvent = function(newEvent){
        EventFactory.addEvent(newEvent, function(response){
            if(response == true)
                $location.path('/chef_dashboard');
            getChefEvents();
        })
    }

    this.destroy = function(event){
      EventFactory.destroy(event, function(response){
        console.log(response);
      })
    }

    getChefInfo();
    getChefEvents();

})
