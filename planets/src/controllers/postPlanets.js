const { response } = require('../utils/');

module.exports = async() => {
    await response(res,200,"Planeta creado!");
}