(function() {

	angular.module('app').service('AnswerService', AnswerService);
	
	function AnswerService() {
		return {
			getAnswer : function() {
				// suppose we call database or get this from API
				return '42';
			}
		}
	}
	
})();

