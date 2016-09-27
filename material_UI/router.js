      app.config(function($stateProvider, $urlRouterProvider)
         
      { 
         $urlRouterProvider.otherwise('/');
            $stateProvider
            .state('/search/:movie', {
               url:  '/search/:movie',
               templateUrl: 'movie.html',
               controller: 'myctrl'
            })
            .state('/view/:id',
            {
               url: '/view/:id',
               templateUrl:'information.html',
               controller:'viewController'
               
      
            
            });
         });       
      