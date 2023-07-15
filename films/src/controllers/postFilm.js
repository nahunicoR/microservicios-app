const {response} =require("../utils");
const Films = require("../data");

module.exports = async (req, res) => {
   const newFilm = await Films.create(req.body);
   response(res,200,newFilm);
}