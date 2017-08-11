app.controller('searchController', ['searchFactory', '$log', searchController]);


function searchController(searchFactory, $log){

	var vm = this;
	    vm.searchString;
	    vm.list;
	    vm.change = function(){
           searchFactory.getSearchResult(vm.searchString)
			.then(sucessHandler)
			.catch(ErrorHandler);

	    	function ErrorHandler(response){
		      	$log.warn(response.statusText);
		 	}

		 	function sucessHandler(response){
		 		vm.list = response;
		 	}
		}

		
	    

}