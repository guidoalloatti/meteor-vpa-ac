Users = new Meteor.Collection('users');

if (Meteor.isClient) {
  Template.user_list.users = function () {
    return Users.find({});
  }

  Template.hello.greeting = function () {
    return "Welcome to meteor-vpa-ac.";
  };



  Template.user_list.events({
    'click .check' : function () {
      // template data, if any, is available in 'this'
      //console.log(this._id, this.aire);
      Users.update(this._id, {$set: {aire: !this.aire}});
      //if (typeof console !== 'undefined')
        //console.log("click", this.name);
        //console.log(this); 
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
