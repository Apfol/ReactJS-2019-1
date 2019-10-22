/**
 * RawMaterialInventoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getRawmaterialinventory: async (req, res) => {

    RawMaterialInventory.getDatastore().sendNativeQuery('select rawmaterial.idRawMaterial, rawmaterial.name, rawmaterialinventory.quantity, rawmaterialinventory.unit \n' +
      'from rawmaterial, rawmaterialinventory \n' +
      'where rawmaterialinventory.idRawMaterial = rawmaterial.idRawMaterial;', [], function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
      res.ok(rawResult.rows);
    });
  },

  postRawMaterialinventory: async (req, res) => {

    RawMaterialInventory.getDatastore().sendNativeQuery("truncate table rawMaterialInventory");
    if (req.method === "POST") {
      var insert = "insert into rawmaterialinventory(id,idRawMaterial,Quantity, unit)" +
        "values(" + req.allParams().id + "," + req.allParams().idRawMaterial + "," + req.allParams().quantity + req.allParams().unit + ")";

      RawMaterialInventory.getDatastore().sendNativeQuery(insert, function (err, record) {
        if (err) {
          console.log("ERROR");
        }
      });
    }
  },

};

