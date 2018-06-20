resourceApp.controller('resourcelistCtrl',["$scope","$state","$stateParams","RAService",function($scope, $state, $stateParams, RAService){
	$scope.$on('$viewContentLoaded', function () {
		$scope.getresourcelist();
	})
	$scope.getresourcelist=function (){
		debugger;
		RAService.RAresourcelist().then(function(response){
			debugger;
			$scope.resourcelist=response.data.result;
			
			console.log($scope.resourcelist)
		})
	}
	}])

	
	
					