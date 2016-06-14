var app = angular.module("FormApp", []);

app.controller("FormCtrl", function($scope) {
  $scope.text1 = "";
  $scope.text2 = "";
  $scope.checkInputs = function(){
    if (($scope.text1 !== "") && ($scope.text2 !== "")){
      console.log("ok");
    } else {
      console.log("not ok");
    };


  }

});