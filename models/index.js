'use strict';

//imports for this
//must createdb boilerplate_db to use
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/boilerplate_db');


//example tables/schema:

const schemaOne = db.define('schemaOne', {
  rowOne: {type: Sequelize.STRING, allowNull: false},
  rowTwo: {type: Sequelize.STRING, allowNull: false}
  //etc...
}, {
  getterMethods: {
    //function name: function() {}....,
    //function name: function() {}....
  },
  setterMethods: {
    //function name: function() {}....,
    //function name: function() {}....
  },
  hooks: {
    //(before, after, etc)
    //function name: function() {}....,
    //function name: function() {}....
  }
});

const schemaTwo = db.define('schemaTwo', {
  rowOne: {type: Sequelize.STRING, allowNull: false},
  rowTwo: {type: Sequelize.STRING, allowNull: false}
  //etc...
}, {
  getterMethods: {
    //see schemaOne
  },
  setterMethods: {
    //see schemaOne
  },
  hooks: {
    //see schemaOne
  }
});


//Class Method Example:
schemaOne.deleteAll = function() {
  //returns a promise
  return schemaOne.destroy({where: {}});
};

//Instance Method Example:
schemaOne.prototype.changeAllRowTwo = function() {
  //returns an array of promises, sets all rowTwo vals to 'updated'
  return schemaOne.update({rowTwo: 'updated'}, {where: {/*blank, thus all*/}});
};

// //Associations. These are commented out as they conflict.

// //one to one associations:
// schemaTwo.hasOne(schemaOne, {as: 'association2'});

// //one to many associations:
// schemaOne.hasMany(schemaTwo, {as: 'OneToMany'});

// //one to one OR one to many:
// schemaOne.belongsTo(schemaTwo, {as: 'association1'});

// //many to many:
// schemaOne.belongsToMany(schemaTwo, {as: 'manyToMany'});

//exports:
module.exports = {db, schemaOne, schemaTwo};
