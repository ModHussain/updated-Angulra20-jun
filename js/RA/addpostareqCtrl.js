resourceApp.controller('addpostreqCtrl',["$scope","$rootScope","$state","RAService",function($scope,$rootScope,$state,RAService){
    $scope.$on('$viewContentLoaded', function () {
        $scope.postrequirement = {};
		 $scope.companyNameList=[];
		 $scope.companyId=[];
		 $scope.companyid();
		
        })
     
	$scope.companyid = function(){
		RAService.getCompanyList().then(function(data) {
            debugger;
	             $scope.list=data.result;
				 console.log($scope.list[0].companyName);
					 for(var i=0; i< $scope.list.length;i++){ 
						$scope.companyNameList.push($scope.list[i].companyName);
						$scope.companyId.push($scope.list[i]._id);
					 }
				$scope.companyid = function(){
					debugger;
						 for(var j=0;j<$scope.companyNameList.length;j++){
				
				            if($scope.companyName1 == $scope.companyNameList[j]){
				
				               $scope.comId = $scope.companyId[j];
				               localStorage.setItem("company", $scope.comId);
							   console.log($scope.comId);
				
				            }
						 }
				}
	       });
	};
    $scope.stage = "";
    // Navigation functions
    $scope.next = function (stage) {
      //$scope.direction = 1;
      //$scope.stage = stage;

      if ($scope.frm.$valid) {
        $scope.direction = 1;
        $scope.stage = stage;
      
      }
    };

    $scope.back = function (stage) {
      $scope.direction = 0;
      $scope.stage = stage;
    };

	$scope.uploadFile = function(){
       	debugger;
           var uploadFile = $scope.myFile;
           $scope.registrationId= $scope.comId;
           console.log(uploadFile);
          /* console.log(fd);*/
           var uploadUrl = "http://localhost:8081/ResourceAdda/rest/requirement/bulkUpload/"+$scope.registrationId;
           RAService.uploadFileToUrl(uploadFile,uploadUrl).then(function(data){
           		$scope.f=data.result;
           		console.log($scope.f);
           		console.log("success");
           	 $state.go('RA.postarequirementlist');
           },function(err){
	       if(err){
	           $scope.errorMessage = err;
	      	 }console.log("fail");
           })
    };
			 

         
       
	$scope.jobcategory = ["Java Developer","UI Developer","IDM Consultant","Testing"];
	$scope.jobtype = ["Contract","Full-time","Part-time"];
    $scope.joblocation= ["Bangalore","Chennai","Hyderabad","Pune","Itanagar","Dispur","Patna","Raipur","Panaji","Gandhinagar","Punjab","Shimla","Srinagar","Ranchi",
    	"Thiruvananthapuram","Bhopal","Mumbai","Imphal","Shillong","Aizawl","Kohima","Bhubaneswar","Jaipur","Gangtok","Noida","Amaravathi","Agartala","Lucknow","Dehradun","Kolkata"];
    $scope.experience = ["1-2 years","2-3 years","3-5 years","5-7 years","7-10 years"]; 
    $scope.Rate=["Hourly","Per-Day","Per-Week","Per-Month"];
	$scope.primaryskills = ["Java","JDBC","HTML5","CSS3","Javascript","AngularJS"];
	$scope.secondaryskills = ["Oracle","MYSQL","SQL Server","MongoDB","WebRTC","Web Socket"];
	$scope.joining = ["Immediate","10-15 days","15-30 days","30-45 days"];
	$scope.gender = [ "Male", "Female", "Transgender" ];
	 $scope.years = ["0 year","1 year", "2 years", "3 years","4 years", "5 years", "6 years","7 years", "8 years", "9 years","10 years","11 years"];
     $scope.months = ["0 month","1 months", "2 months", "3 months","4 months", "5 months", "6 months","7 months", "8 months", "9 months","10 months","11 months"];
    $scope.addReq = function(){
        debugger;
        $scope.postrequirement.registrationId= $scope.comId;
        $scope.postrequirement.primarySkills=$scope.postrequirement.primarySkills.toString();
        $scope.postrequirement.secondarySkills=$scope.postrequirement.secondarySkills.toString();
        console.log($scope.postrequirement.primarySkills);
        console.log($scope.postrequirement.secondarySkills);
        RAService.adddata($scope.postrequirement).then(function(response){
        $scope.bbbb =$scope.postrequirement;
        console.log($scope.bbbb);
       $state.go('RA.postarequirementlist');
        },function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
           }   
        }
        )
	},
	

    $scope.showBulk = true;
	$scope.hideBulk = true;
    $scope.bulkFunction=function(){
    	 $scope.showBulk = !$scope.showBulk;
    	 $scope.hideBulk =!$scope.hideBulk
    }
   

    
    
}]);