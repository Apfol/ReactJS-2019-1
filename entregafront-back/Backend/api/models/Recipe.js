/**
 * Recipe.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    idProduct: {
      type: 'number',
      required: true
    },

    idRecipe: {
      type: 'number',
      required: true
    },

    rawMaterial1: {
      type: 'number',
      required: true
    },

    quantity1: {
      type: 'number',
      required: true
    },

    rawMaterial2: {
      type: 'number',
      required: true
    },

    quantity2: {
      type: 'number',
      required: true
    },

    rawMaterial3: {
      type: 'number',
      required: true
    },

    quantity3: {
      type: 'number',
      required: true
    },

    rawMaterial4: {
      type: 'number',
      required: true
    },

    quantity4: {
      type: 'number',
      required: false
    },

    rawMaterial5: {
      type: 'number',
      required: false
    },

    quantity5: {
      type: 'number',
      required: true
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};
