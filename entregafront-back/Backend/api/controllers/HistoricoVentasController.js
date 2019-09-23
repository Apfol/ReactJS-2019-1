/**
 * HistoricoVentasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  historicoVentas: async (req, res) => {
    HistoricoVentas.getDatastore().sendNativeQuery('select products.name, historicoventas.Enero, historicoventas.Febrero, historicoventas.Marzo, historicoventas.Abril,\n' +
      'historicoventas.Mayo, historicoventas.Junio, historicoventas.Julio, historicoventas.Agosto,\n' +
      'historicoventas.Septiembre, historicoventas.Octubre, historicoventas.Noviembre, historicoventas.Diciembre\n' +
      'from historicoventas, products where historicoventas.idProduct = products.idProduct', [], function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
      res.ok(rawResult.rows);
    });
  },

};

