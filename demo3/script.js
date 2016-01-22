(function(angualr) {
    angular.module('docsIsolateScopeDirective', [])
        .controller('Controller', ['$scope', function ($scope) {
            $scope.naomi = {name: 'Naomi', address: '1600 Amphithieatre'};
            $scope.igor = {name: 'Igor', address: '123 Someshere'};
        }])
        .directive('myCustomer', function () {
            return {
                restrict: 'E',
                scope: {
                    customerInfo: '=info'
                },
                templateUrl: 'my-customer-iso.html'
            };
        });
})(window.angular)