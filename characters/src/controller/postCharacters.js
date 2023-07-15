const {response} =require("../utils");

module.exports = async (req, res) => {
   await response(res,200,"Pelicula creada!");
}