Template.chooseRice.events({
  'click .rice' : function () {
    var rice_type = $('input.rice:checked').val();
    if (rice_type === "brown_rice") {
      Session.set("riceCalories", 160);
    } else if (rice_type === "white_rice") {
      Session.set("riceCalories", 170);
    } else {
      Session.set("riceCalories", 0);
    }
  }
});

Template.chooseBeans.events({
  'click .beans' : function () {
    var beans_type = $('input.beans:checked').val();
    if (beans_type === "black_beans" || "pinto_beans") {
      Session.set("beansCalories", 120);
    } else {
      Session.set("beansCalories", 0);
    }
  }
});

Template.chooseMeat.events({
  'click .meat' : function () {
    //template data, if any, is available in 'this'
    var meat_type = $('input.meat:checked').val();
    if (meat_type === "steak") {
      Session.set("meatCalories", 120);
    } else if (meat_type === "barbacoa") {
      Session.set("meatCalories", 170);
    } else if (meat_type === "chicken" || "carnitas") {
      Session.set("meatCalories", 190)
    } else {
      Session.set("meatCalories", 0);
    }
  }
});

Template.chooseExtras.events({
  'click .extra' : function () {
    var extrasCalories = 0;
    Session.set("extrasCalories", 0);
    $('input.extra:checked').each(function(element){
      if(this.value === "mild"){
        extrasCalories += 20;
      } else if (this.value === "medium") {
        extrasCalories += 15;
      } else if (this.value === "hot") {
        extrasCalories += 40;
      } else if (this.value === "sour_cream"){
        extrasCalories += 120;
      } else if (this.value === "cheese"){
        extrasCalories += 100;
      } else if (this.value === "guacamole"){
        extrasCalories += 150;
      } else if (this.value === "lettuce"){
        extrasCalories += 5;
      }
      Session.set("extrasCalories", extrasCalories);
    });
  }
});
