Users = new Meteor.Collection('users');

if (Meteor.isClient) {
  Template.user_list.users = function () {
    return Users.find({});
  }

  Template.user_list.events({
    'click .check' : function () {
      // template data, if any, is available in 'this'

       var value = null;
      if (event.target.value == "true"){
        value = true;
      }else if(event.target.value == "false"){
        value = false
      }
      Users.update(this._id, {$set: {aire: value}});
    }
  });

  Handlebars.registerHelper('if_aire_on', function (aire,options){
     if (aire == true){
      return options.fn(this);
    } else if(aire == false){
      return options.inverse(this);
    }
  });
  Handlebars.registerHelper('if_aire_off', function (aire,options){
    
     if (aire == false){
      return options.fn(this);
    } else if(aire == true) {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper('if_aire_null', function (aire,options){
    
     if (aire == null){
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });



  Template.results.aire_count = function(){
    return Users.find({aire: true}).count();
  };

  Template.results.sin_aire_count = function(){
    return Users.find({aire: false}).count();
  };

  Template.results.aire_wins = function(){
    return(Template.results.aire_count() > Template.results.sin_aire_count());
  } 
  Template.results.aire_loses = function(){
    return(Template.results.aire_count() < Template.results.sin_aire_count());
  }
}

if (Meteor.isServer) {
    Meteor.startup(function () {
      if(Users.find().count() === 0) {
        people = [{name:"JuanCa", aire: null},
          {name:"Diegote", aire: null},
          {name:"DaniM", aire: null},
          {name:"NicoH", aire: null},
          {name:"Eve", aire: null},
          {name:"Gisela", aire: null},
          {name:"Paula", aire: null},
          {name:"DaniR", aire: null},
          {name:"MartinL", aire: null},
          {name:"Juan Manuel", aire: null},
          {name:"Silvina", aire: null},
          {name:"LeoT", aire: null},
          {name:"Guido", aire: null},
          {name:"Tate", aire: null},
          {name:"Andy", aire: null},
          {name:"Cacu", aire: null},
          {name:"Mati", aire: null},
          {name:"Pato", aire: null},
          {name:"Rodri", aire: null},
          {name:"Gonzo", aire: null},
          {name:"Leo E", aire: null},
          {name:"NicoRT", aire: null},
          {name:"Mati C", aire: null},
          {name:"March", aire: null},
          {name:"NaN", aire: null},
          {name:"Seba", aire: null},
          {name:"Bruno", aire: null}
          ];
      
        for( i=0; i< people.length; i++){
          Users.insert({name: people[i].name, aire:  people[i].aire });
          console.log('User fill' + i);
        }
      }
  });
};
