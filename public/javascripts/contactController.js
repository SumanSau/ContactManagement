var myContactApp = angular.module('myContactApp', []);

myContactApp.controller('myContactAppControl', function ($scope, $http) {
    $scope.showAdd = false;
    $scope.showUpdate = false;
    $scope.showDelete = false;
    $scope.updateDelete = false;
    $scope.Updates = ["Select One","Email","Mobile"];
    $scope.selectedUpdate = $scope.Updates[0];
    $scope.Deletes = ["Select One","Email","Mobile"];
    $scope.selectedDelete = $scope.Deletes[0];
    
    $scope.data = {};
    $scope.addContact = function()
    {
       
       
       console.log($scope.data.firstName);
       console.log($scope.data.lastName);
       console.log($scope.data.city);
       console.log($scope.data.mobile);
       console.log($scope.data.telephone);
       console.log($scope.data.emailID);
    //  $http.get("/addContact",{params :  add}).success(function(response){
      //  console.log(response);
       //});
    }
    //$scope.addContact();


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