$(document).ready(function(argument) {
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

	var coveringInput = $('input.covering');
	var riceInput = $('input.rice');
	var beansInput = $('input.beans');
	var meatInput = $('input.meat');
	var extrasInput = $('input.extra');

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

	riceInput.on('click', function(event) {
		switch($(this).val()){
			case 'white_rice':
				calories.rice = 170;
				break;
			case 'brown_rice':
				calories.rice = 160;
				break;
		};
		$('#calorieCount').text(calories.total());
	});

	beansInput.on('click', function(event) {
		calories.beans = 120;
		$('#calorieCount').text(calories.total());
	});

	meatInput.on('click', function(event) {
		switch($(this).val()){
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
		$('#calorieCount').text(calories.total());
	});

	extrasInput.on('click', function(event) {
		calories.extras = 0;
    $('input.extra:checked').each(function(element){
      if(this.value === "mild"){
        calories.extras += 20;
      } else if (this.value === "medium") {
        calories.extras += 15;
      } else if (this.value === "hot") {
        calories.extras += 40;
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
		$('#calorieCount').text(calories.total());
	});
});
