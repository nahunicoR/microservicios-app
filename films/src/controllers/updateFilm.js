const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const updatedFilm = await Films.update(id, req.body);
  response(res, 200, updatedFilm);
};
