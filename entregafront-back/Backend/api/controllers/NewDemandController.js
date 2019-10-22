/**
 * NewDemandController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getDemand: async (req, res) => {
    NewDemand.getDatastore().sendNativeQuery("select products.name, newdemand.Enero, newdemand.Febrero, newdemand.Marzo, newdemand.Abril,\n" +
      "newdemand.Mayo, newdemand.Junio, newdemand.Julio, newdemand.Agosto,\n" +
      "newdemand.Septiembre, newdemand.Octubre, newdemand.Noviembre, newdemand.Diciembre\n" +
      "from newdemand, products where newdemand.idProduct = products.idProduct limit 10;", [], function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
      console.log(rawResult);
      res.ok(rawResult.rows);
    });
  },

  // post to the data base the new demand
  postDemand: async (req, res) => {
    if (req.method === "POST") {
      var insert = "insert into newdemand  (id, idProduct, Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre)" +
        "values(" + req.allParams().id + "," + req.allParams().idProduct + "," + req.allParams().Enero +
        "," + req.allParams().Febrero + "," + req.allParams().Marzo + "," + req.allParams().Abril + "," + req.allParams().Mayo + ","
        + req.allParams().Junio + "," + req.allParams().Julio + "," + req.allParams().Agosto + "," + req.allParams().Septiembre + "," + req.allParams().Octubre + ","
        + req.allParams().Noviembre + "," + req.allParams().Diciembre + ")";

      NewDemand.getDatastore().sendNativeQuery(insert, function (err, record) {
        if (err) {
          console.log(err);
        }
      });
    }
  },

};

