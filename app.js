$(document).ready(function() {

	// The calories object tracks the number of calories in each component of the entree,
	// as well as the total calories in the entree.
	var calories = {
		covering: 0,
		rice: 0,
		beans: 0,
		meat: 0,
		extras: 0,
		total: function(){
			var sum = this.covering + this.rice + this.beans + this.meat + this.extras;
			return sum;
		}
	};

	var radioButton = $('input');
	var resizeBurrito = function() {
		$('#burritoImage').css('width', calories.total()/2);
	};

	radioButton.on('click', function(event) {
		var formSection = $(this).parent().parent().attr('id');
		var inputValue = $(this).val();
		if(formSection === 'coverings') {
			updateCoveringCalories(inputValue);
		} else if(formSection === 'rice') {
			updateRiceCalories(inputValue);
		} else if(formSection === 'beans') {
			updateBeansCalories(inputValue);
		} else if(formSection === 'meat') {
			updateMeatCalories(inputValue);
		} else if(formSection === 'extras') {
			updateExtrasCalories(inputValue);
		}

		$('#calorieCount').text(calories.total());
		resizeBurrito();
	});

	var updateCoveringCalories = function(coveringType) {
		switch(coveringType){
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
	};

	var updateRiceCalories = function(riceType) {
		switch(riceType){
			case 'white_rice':
				calories.rice = 170;
				break;
			case 'brown_rice':
				calories.rice = 160;
				break;
		};
	};

	var updateBeansCalories = function(beansType) {
		calories.beans = 120;
	};

	var updateMeatCalories = function(meatType) {
		switch(meatType){
			case 'steak':
				calories.meat = 190;
				break;
			case 'chicken':
				calories.meat = 190;
				break;
			case 'carnitas':
				calories.meat = 190;
				break;
			case 'barbacoa':
				calories.meat = 170;
				break;
			case 'sofritas':
				calories.meat = 145;
				break;
		};
	};


	var updateExtrasCalories = function(extraType) {
		calories.extras = 0;
	  $('input.extra:checked').each(function(element){
	    if(this.value === "mild"){
	      calories.extras += 20;
	    } else if (this.value === "medium") {
	      calories.extras += 15;
	    } else if (this.value === "hot") {
	      calories.extras += 40;
	    } else if (this.value === "corn_salsa") {
	      calories.extras += 80;
	    } else if (this.value === "sour_cream"){
	      calories.extras += 120;
	    } else if (this.value === "cheese"){
	      calories.extras += 100;
	    } else if (this.value === "guacamole"){
	      calories.extras += 150;
	    } else if (this.value === "lettuce"){
	      calories.extras += 5;
	    }
	  });
	};

});
