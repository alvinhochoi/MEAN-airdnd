var counter = 0;
app.controller('AppsController', function($scope, AppsFactory) {
var that = this;

// while(counter<1){
//   name = prompt('Please enter your name to make an appointment');
//     if(name){
//       AppsFactory.setUser(name);
//       counter ++;
//     }
//   }

function getUser(){
  AppsFactory.getUser(function(name){
  $scope.name = name;
  that.name = name;
})
}
getUser();

function getLocation(){
  AppsFactory.getLocation(function(location){
    that.location = location;
  })
}
getLocation();

function getCusine(){
  AppsFactory.getCusine(function(cusine){
    that.cusine = cusine;
  })
}
getCusine();

function getChef(){
  AppsFactory.getChef(function(chef){
    that.chef = chef;
  })
}
getChef();


function getApps(){
  AppsFactory.getApps(function(apps){
    that.apps = apps;
    $scope.newApp = {};
    var today = new Date();
    var previousDay = new Date(today);
    previousDay.setDate(today.getDate()-1);
    that.today = today.toISOString();
    that.previousDay = previousDay.toISOString();
  })
}
getApps();

socket.on('updateAll', function(){
  getApps();
  // getLocation();
  // getCuisine();
  // getChef();
})

this.addApp = function(newApp) {
  AppsFactory.addApp(newApp, function(response){
    $scope.errors = response;
    getApps();
  })
}

this.reset = function(){
  $scope.search = {};
}

this.destroyApp = function(appointment){

  AppsFactory.destroyApp(appointment, function(){
    getApps();
  })
}

this.logOut = function(){
      counter = 0;
  }




});
