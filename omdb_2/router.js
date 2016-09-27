      app.config(function($routeProvider)
         
      { 
            $routeProvider
            .when('/search/:movie', {
               templateUrl: 'movie.html',
               controller: 'myctrl'
            })
            .when('/view/:id',
            {
               templateUrl:'information.html',
               controller:'viewController'
               
      
            })
            .otherwise({
               redirectTo: '/'
            });
         });       
      