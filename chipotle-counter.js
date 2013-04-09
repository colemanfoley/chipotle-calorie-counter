if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to chipotle-counter.";
  };

  Template.hello.totalCalories = function () {
    return Session.get("totalCalories");
  }

  Template.hello.events({
    'click .rice' : function () {
      // template data, if any, is available in 'this'
      var rice_type = $('input:checked').val();
      if (rice_type === "brown_rice") {
        Session.set("totalCalories", 160);
        console.log(Session.get("totalCalories"));
      } else {
        Session.set("totalCalories", 170);
      }
    },

    'click .beans' : function () {
      // template data, if any, is available in 'this'
      var beans_type = $('input:checked').val();
      var currentCalories =  Session.get("totalCalories");      
      if (beans_type === "black_beans") {

      } else {
        Session.set("totalCalories", 170);
      }
    }    
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
