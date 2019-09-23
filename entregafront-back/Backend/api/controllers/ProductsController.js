/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  product: async (req, res) => {
    Products.getDatastore().sendNativeQuery('select recipe.idRecipe, products.name from recipe, products where recipe.idProduct = products.idProduct', [], function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
      console.log(rawResult.rows);
      res.ok(rawResult.rows);
    });
  },
};

