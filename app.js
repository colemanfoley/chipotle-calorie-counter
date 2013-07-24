$(document).ready(function(argument) {
	// The calories object tracks the number of calories in each component of the entree,
	// as well as the total calories in the entree.
	var calories = {
		covering: 0,
		meat: 0,
		salsa: 0,
		total: function(){
			var sum = this.covering + this.meat + this.salsa;
			return sum;
		}
	};

	var coveringInput = $('input.covering');

	coveringInput.on('click', function(event) {
		switch($(this).val()){
			case 'burrito':
				calories.covering = 290;
				break;
			case 'bowl':
				calories.covering = 0;
				break;
			case 'tacos':
				calories.covering = 180;
				break;
			case 'salad':
				calories.covering = 10;
				break;
		};
		$('#calorieCount').text(calories.total());
	});


});