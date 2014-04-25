angular.module('ngWorkshopsApp')
    .controller('ProjectsNewCtrl', ['$scope', '$modalInstance', '$http', function($scope, $modalInstance, $http) {
        console.log('ProjectNewCtrl loaded');

        $scope.project = {name:'', email:''};

        $scope.newProject = function(){
            console.log($scope);

            $http.post('/projects', $scope.project).success(function(response){
                console.log(response);

                $modalInstance.close(response);
            })
        }
    }]);