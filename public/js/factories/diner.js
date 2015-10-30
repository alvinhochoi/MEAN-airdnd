app.factory('DinerFactory', function($http){
  var factory = {};
  factory.user = {};


factory.addDiner = function(newDiner, callback) {
  console.log('fac',newDiner);
  $http.post('/diner', newDiner).success(function(response){
    callback(response);
  })
}

factory.logDiner = function(diner, callback) {
  console.log('fact',diner);
  $http.post('/logdiner', diner).success(function(response){
    callback(response);
  })
}

factory.setUser = function(user){
    this.user = user;
  },

factory.getDiner = function(callback) {
  $http.get('/getDiner').success(function(response){
    diner = response;
    callback(response);
  })
}
return factory;
});
