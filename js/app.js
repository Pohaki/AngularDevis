var app = angular.module('serviceApp',[]);
app.controller('serviceController',function($scope){
  $scope.services = [{
      name: 'Web Development',
      price: 300,
      active:true
    },
    {
      name: 'Design',
      price: 400,
      active:false
    },
    {
      name: 'Integration',
      price: 250,
      active:false
    },
    {
      name: 'Formation',
      price: 220,
      active:false
    }];
  $scope.total = function(){
    var total = 0;
    $scope.count = 0;
    angular.forEach($scope.services, function(s){
      if(s.active){
          total += s.price;
          $scope.count++
      }
    });
      return total;
  }
  $scope.toggleActive = function(s){
      s.active = !s.active;
    }
});
