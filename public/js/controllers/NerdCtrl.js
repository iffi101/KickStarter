angular.module('NerdCtrl', []).controller('NerdController', function($scope,$location,$http,$route,Nerd) {
	
		$scope.confirmation = function (){
			
			var sure = confirm('Are you sure you want to delete this record?');
			return sure;
		}
	
    $scope.tagline = 'Nothing beats a pocket protector!';
		$scope.getNerds=function(){
		$scope.nerdData={};	
		Nerd.get().then(function(response)
			{
				
				$scope.nerdVals=response;
				console.log($scope.nerdVals);
			});
		};
		$scope.del=function(id){
			
			if ($scope.confirmation()){
			console.log(id);
			var data = {'id':id};
			Nerd.delete(data).then( function (response){
				if (response='deleted'){
					$scope.getNerds();
					$scope.message='Nerd Deleted';
					
				}
			});
		}};	
		 $scope.createNerds=function(){
				
				//console.log($scope.nerdData);
				var stringify = JSON.stringify($scope.nerdData)
				//console.log(stringify);
				Nerd.create(stringify).then(function(response){
					console.log(response);
					if (response='done'){
						$scope.getNerds();
						nerdForm.name.value='';
						nerdForm.occupation.value='';
						$scope.message='A nerd is created';
						
					}
					else{
						$scope.message='Something Went Wrong';
					}
					
				});	
			
		}
		$scope.update=function(id)
		{
			
		
			$scope.getOneNerd(id);
			
		}		
		
		
		$scope.editNerd=function()
		{
			var stringify = JSON.stringify($scope.nerdData)
			//console.log(stringify);		
			//$scope.getOneNerd(id);
			///1111
			
			
			Nerd.update(stringify).then(function(response){
					console.log(response);
					if (response='Updated'){
						$scope.getNerds();
					 $scope.nerdData.name='';
					$scope.nerdData.occupation='';
					$scope.nerdData.id='';
					$scope.isUpdate='';
						$scope.message='Updated nerd';
						
					}
					else{
						$scope.message='Something Went Wrong';
					}
					
				});	;
			
		}
		
		
		$scope.getOneNerd=function(id){
			
				
			var data = {'id':id};
			Nerd.getOneNerd(data).then(function(response){
				console.log(response);
				 $scope.nerdData.name=response.data.name;
				 $scope.nerdData.occupation=response.data.occupation;
				 $scope.nerdData.id=response.data._id;
				 $scope.isUpdate=response.data._id;
				 aNerd=response;
				 console.log(aNerd);
		 });
		}
		
		$scope.testPaypal = function(){
			var data = {}
			console.log('Testing in progess');
			Nerd.testPaypal(data);
		} 
		
		$scope.getNerds();
});