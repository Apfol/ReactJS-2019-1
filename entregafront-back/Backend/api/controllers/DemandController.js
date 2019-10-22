/**
 * DemandController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  demand: async (req, res) => {
    Demand.getDatastore().sendNativeQuery('select products.name, demand.Enero, demand.Febrero, demand.Marzo, demand.Abril,\n' +
      'demand.Mayo, demand.Junio, demand.Julio, demand.Agosto,\n' +
      'demand.Septiembre, demand.Octubre, demand.Noviembre, demand.Diciembre\n' +
      'from demand, products where demand.idProduct = products.idProduct', [], function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
      res.ok(rawResult.rows);
    });
  },
};
