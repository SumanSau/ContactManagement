var myContactApp = angular.module('myContactApp', []);

myContactApp.controller('myContactAppControl', function ($scope, $http) {
    $scope.showAdd = false;
    $scope.showUpdate = false;
    $scope.showDelete = false;
    $scope.showAll = false;
    $scope.result1 = '';
    $scope.options1 = null;
    $scope.details1 = '';
    $scope.updateDelete = false;
    $scope.Updates = ["Select One","Email","Mobile"];
    $scope.selectedUpdate = $scope.Updates[0];
    $scope.Deletes = ["Select One","Email","Mobile"];
    $scope.selectedDelete = $scope.Deletes[0];
    
    $scope.data = {};
    $scope.addContact = function()
    {
       
       
       var contact = {
                      "fname" : $scope.data.firstName,
                      "lname" : $scope.data.lastName,
                      "city" : $scope.data.city,
                       "mobile" : $scope.data.mobile,
                       "telephone" : $scope.data.telephone,
                       "emailID" : $scope.data.emailID
                     };
     $http.get("/addContact",{params :  contact}).success(function(response){
        console.log(response);
       });
       //console.log(contact);
    };

    $scope.updateContactEmail = function()
    {
      var obj = 
        {
            "emailID" : $scope.data.selectedEmailID
        };
       // console.log("Email is coming");
       // console.log($scope.data.selectedEmailID);
      $http.get("/updateContactEmail",{params : obj }).success(function(response)
        {
            console.log(response[0]);
            $scope.result = response[0];
            console.log($scope.result);
        });
      //console.log("Email  Updated Successfully");
    };

    $scope.updateContactMobile = function()
    {
      var obj = 
        {
            "mobile" : $scope.data.selectedMobileNo
        };
        console.log("In Mobile");
        console.log($scope.data.selectedMobileNo);
      $http.get("/updateContactEmail",{params : obj }).success(function(response)
        {
            console.log(response[0]);
            $scope.result = response[0];
            console.log($scope.result);
        });
    };

    $scope.deleteContactEmail = function()
    {
      var obj = 
        {
            "emailID" : $scope.data.selectedEmailID
        };
       // console.log("Email is coming");
       // console.log($scope.data.selectedEmailID);
      $http.get("/deleteContactEmail",{params : obj }).success(function(response)
        {
            console.log(response[0]);
            $scope.result = response[0];
            console.log($scope.result);
        });
    };

    $scope.deleteContactMobile = function()
    {
      var obj = 
        {
            "mobile" : $scope.data.selectedMobileNo
        };
        console.log("In Mobile");
        console.log($scope.data.selectedMobileNo);
      $http.get("/deleteContactEmail",{params : obj }).success(function(response)
        {
            console.log(response[0]);
            $scope.result = response[0];
            console.log($scope.result);
        });
      
    };
    $scope.getContactDetail = function()
    {
      
        
      $http.get("/getContactDetails").success(function(response)
        {
           // console.log(response[0]);
            $scope.result = response;
           // console.log($scope.result);
        });
      
    };


  $scope.toggleAdd = function()
    {
        $scope.showAdd = !$scope.showAdd;
    };
        
    $scope.toggleUpdate = function()
    {
        $scope.showUpdate = !$scope.showUpdate;
    };
    $scope.toggleDelete = function()
    {
        $scope.showDelete = !$scope.showDelete;
    };
    $scope.toggleAll = function()
    {
        $scope.showAll = !$scope.showAll;
    };
    
  });


myContactApp.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="false">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      keyboard:false,
      //scope:true,
     link: function postLink(scope, element, attrs)
      {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value)
        {
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function()
        {
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function()
        {
          scope.$apply(function() {
            scope.$parent[attrs.visible] = false;
          });
        });
      } 
    };
  });



/*myContactApp.directive('ngAutocomplete', function($parse) {
    return {

      scope: {
        details: '=',
        ngAutocomplete: '=',
        options: '='
      },

      link: function(scope, element, attrs, model) {

        //options for autocomplete
        var opts

        //convert options provided to opts
        var initOpts = function() {
          opts = {}
          if (scope.options) {
            if (scope.options.types) {
              opts.types = []
              opts.types.push(scope.options.types)
            }
            if (scope.options.bounds) {
              opts.bounds = scope.options.bounds
            }
            if (scope.options.country) {
              opts.componentRestrictions = {
                country: scope.options.country
              }
            }
          }
        }
        initOpts()

        //create new autocomplete
        //reinitializes on every change of the options provided
        var newAutocomplete = function() {
          scope.gPlace = new google.maps.places.Autocomplete(element[0], opts);
          google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
            scope.$apply(function() {
//              if (scope.details) {
                scope.details = scope.gPlace.getPlace();
//              }
              scope.ngAutocomplete = element.val();
            });
          })
        }
        newAutocomplete()

        //watch options provided to directive
        scope.watchOptions = function () {
          return scope.options
        };
        scope.$watch(scope.watchOptions, function () {
          initOpts()
          newAutocomplete()
          element[0].value = '';
          scope.ngAutocomplete = element.val();
        }, true);
      }
    };
  });*/