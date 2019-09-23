/**
 * RecipeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  recipe: async (req, res) => {
    Recipe.getDatastore().sendNativeQuery('select distinct * from(select recipe.idRecipe, rawmaterial.name as material1, recipe.quantity1 from rawmaterial, recipe where recipe.rawMaterial1 = rawmaterial.idRawMaterial' +
      ')as a ,  (select recipe.idRecipe, rawmaterial.name as material2, recipe.quantity2 from rawmaterial, recipe where recipe.rawMaterial2 = rawmaterial.idRawMaterial' +
      ')as b, ( select recipe.idRecipe, rawmaterial.name as material3, recipe.quantity3 from rawmaterial, recipe where recipe.rawMaterial3 = rawmaterial.idRawMaterial' +
      ') as c,( select recipe.idRecipe, rawmaterial.name as material4, recipe.quantity4 from rawmaterial, recipe where recipe.rawMaterial4 = rawmaterial.idRawMaterial' +
      ') as d,( select recipe.idRecipe, rawmaterial.name as material5, recipe.quantity5 from rawmaterial, recipe where recipe.rawMaterial5 = rawmaterial.idRawMaterial' +
      ') as e where a.idRecipe=b.idRecipe  and a.idRecipe = c.idRecipe and a.idRecipe = d.idRecipe order by a.idRecipe ', [], function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
      res.ok(rawResult.rows);
    });
  },

};

