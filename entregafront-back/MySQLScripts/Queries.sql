use analisis;
#get demand per month of a product
select products.name, demand.Enero, demand.Febrero, demand.Marzo, demand.Abril,
demand.Mayo, demand.Junio, demand.Julio, demand.Agosto,
demand.Septiembre, demand.Octubre, demand.Noviembre, demand.Diciembre
from demand, products where demand.idProduct = products.idProduct

#get rawMaterialInventory
select rawmaterial.idRawMaterial, rawmaterial.name, rawmaterialinventory.quantity, rawmaterialinventory.unit 
from rawmaterial, rawmaterialinventory 
where rawmaterialinventory.idRawMaterial = rawmaterial.idRawMaterial;

#get newDemand
select products.name, newdemand.Enero, newdemand.Febrero, newdemand.Marzo, newdemand.Abril,
newdemand.Mayo, newdemand.Junio, newdemand.Julio, newdemand.Agosto,
newdemand.Septiembre, newdemand.Octubre, newdemand.Noviembre, newdemand.Diciembre
from newdemand, products where newdemand.idProduct = products.idProduct limit 10;

#get historico per month of a product
select products.name, historicoventas.Enero, historicoventas.Febrero, historicoventas.Marzo, historicoventas.Abril,
historicoventas.Mayo, historicoventas.Junio, historicoventas.Julio, historicoventas.Agosto,
historicoventas.Septiembre, historicoventas.Octubre, historicoventas.Noviembre, historicoventas.Diciembre
from historicoventas, products where historicoventas.idProduct = products.idProduct

#get the recipes of the product
#select distinct * from(
#select recipe.idRecipe, rawmaterial.name as material1, recipe.quantity1 from rawmaterial, recipe where recipe.rawMaterial1 = rawmaterial.idRawMaterial
#)as a ,  (select recipe.idRecipe, rawmaterial.name as material2, recipe.quantity2 from rawmaterial, recipe where recipe.rawMaterial2 = rawmaterial.idRawMaterial
#)as b, ( select recipe.idRecipe, rawmaterial.name as material3, recipe.quantity3 from rawmaterial, recipe where recipe.rawMaterial3 = rawmaterial.idRawMaterial
#) as c,( select recipe.idRecipe, rawmaterial.name as material4, recipe.quantity4 from rawmaterial, recipe where recipe.rawMaterial4 = rawmaterial.idRawMaterial
#) as d,( select recipe.idRecipe, rawmaterial.name as material5, recipe.quantity5 from rawmaterial, recipe where recipe.rawMaterial5 = rawmaterial.idRawMaterial
#) as e where a.idRecipe=b.idRecipe  and a.idRecipe = c.idRecipe and a.idRecipe = d.idRecipe order by a.idRecipe 

