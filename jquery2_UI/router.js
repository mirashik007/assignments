      app.config(function($stateProvider, $urlRouterProvider)
         
      { 
         $urlRouterProvider.otherwise('/');
            $stateProvider
            .state('search', {
               url:  '/search/:name',
               templateUrl: 'searchemp.html',
               controller: 'searchctrl'
            })
            .state('load',
            {
               url: '/load',
               templateUrl:'information.html',
               controller:'myctrl'
            })
            .state('add',
            {
               url: '/add',
               templateUrl:'add.html',
               controller:'addctrl'
            })
            .state('edit',
            {
               url: '/edit/:id',
               templateUrl:'edit.html',
               controller:'editctrl'
            })
              .state('/submit',
            {
               url: '/submit',
              templateUrl:'information.html',
               controller:'myctrl'
            })
         //    .state('delete',
         //    {
         //       url: '/delete/:id',
         //       templateUrl:'information.html',
         //       controller:'delctrl'
         // })
   .state("/save",
   {
       url: '/save',
       templateUrl: "edit.html",
       controller: "editctrl"
               });
         });       
      