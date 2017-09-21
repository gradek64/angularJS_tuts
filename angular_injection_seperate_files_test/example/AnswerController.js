(function() {
	angular.module('app').controller('AnswerController', AnswerController)

	AnswerController.$inject = ['AnswerService'];

	
	function AnswerController(AnswerService) {
		this.theAnswer = AnswerService.getAnswer();
	}

	
})();

