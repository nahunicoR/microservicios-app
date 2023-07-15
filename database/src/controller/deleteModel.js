const {response} = require("../utils");
const store = require("../database");

module.exports = async (req, res) => {
    const { model, _id } = req.params;
    const response = await store[model].delete(_id);
    response(res,200,response);
};