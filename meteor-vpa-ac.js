Users = new Meteor.Collection('users');

if (Meteor.isClient) {
  Template.user_list.users = function () {
    return Users.find({});
  }

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
      if(Users.find().count() === 0) {
        people = [{name:"JuanCa", aire: true},
          {name:"Diegote", aire: true},
          {name:"DaniM", aire: true},
          {name:"NicoH", aire: true},
          {name:"Eve", aire: true},
          {name:"Gisela", aire: true},
          {name:"Paula", aire: true},
          {name:"DaniR", aire: true},
          {name:"MartinL", aire: true},
          {name:"Juan Manuel", aire: true},
          {name:"Silvina", aire: true},
          {name:"LeoT", aire: true},
          {name:"Guido", aire: true},
          {name:"Tate", aire: true},
          {name:"Andy", aire: true},
          {name:"Cacu", aire: true},
          {name:"Mati", aire: true},
          {name:"Pato", aire: true},
          {name:"Rodri", aire: true},
          {name:"Gonzo", aire: true},
          {name:"Leo E", aire: true},
          {name:"NicoRT", aire: true},
          {name:"Mati C", aire: true},
          {name:"March", aire: true},
          {name:"NaN", aire: true},
          {name:"Seba", aire: true},
          {name:"Bruno", aire: true}
          ];
      
        for( i=0; i< people.length; i++){
          Users.insert({name: people[i].name, aire: true });
          console.log('User fill' + i);
        }
      }
  });
};
