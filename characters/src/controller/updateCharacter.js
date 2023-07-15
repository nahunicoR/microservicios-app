const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  const updatedCharacter = await Character.update(_id, req.body);
  response(res, 200, updatedCharacter);
};
