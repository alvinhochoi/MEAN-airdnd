app.factory('AppsFactory', function($http){
  var factory = {};
  factory.user = {};

  factory.setUser = function(user){
    this.user = user;
  },
  factory.getUser = function(callback){
    callback(this.user);
  },
  factory.getApps = function(callback) {
    $http.get('/apps').success(function(response){
      callback(response);
    })
  }
  factory.getLocation = function(callback){
    $http.get('/location').success(function(response){
      callback(response);
    })
  }
  factory.getCusine = function(callback){
    $http.get('/cusine').success(function(response){
      callback(response);
    })
  }
  factory.getChef = function(callback){
    $http.get('/chef').success(function(response){
      callback(response);
    })
  }
  factory.addApp = function(newApp, callback) {
    $http.post('/apps', newApp).success(function(response){
      callback(response.error);
    })
  }

    factory.destroyApp = function(appointment, callback){
    $http.delete('/apps/'+ appointment._id).success(function(response){
      callback(response);
    })
  }

  return factory;
});
