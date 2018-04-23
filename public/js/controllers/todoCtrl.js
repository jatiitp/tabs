angular.module('todoCtrl', []).controller('todoCtrl', function($scope, $http) {


    $scope.snackBar = function(msg) {
        $scope.snackHead = msg;
        var x = document.getElementById("snackbar")
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    };

    $scope.isTab1 = true;
    $scope.switchTabs = function (tab) {
        $scope.isTab1 = false;
        $scope.isTab2 = false;
        $scope.isTab3 = false;
        $scope.isTab4 = false;

        switch(tab) {
            case 1 :
                $scope.isTab1 = true;
                break;
            case 2 :
                $scope.isTab2 = true;
                break;
            case 3 :
                $scope.isTab3 = true;
                break;
            case 4 :
                $scope.isTab4 = true;
                break;
        }


        $scope.tabsHead = ['Home', 'Services', 'Products', 'Contact'];

        $scope.msg = 'You have selected ' + $scope.tabsHead[tab - 1];
        $scope.snackBar($scope.msg);
    };

});