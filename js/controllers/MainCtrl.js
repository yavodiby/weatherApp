app.controller('MainCtrl', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
  });
});
