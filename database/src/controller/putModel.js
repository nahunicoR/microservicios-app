const {response} = require("../utils");
const store = require("../database");

module.exports = async (req, res) => {
    const { model, _id } = req.params;
    const response = await store[model].update(_id, req.body);
    response(res,200,response);
}