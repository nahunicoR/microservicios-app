const {catchedAsync} = require("../utils");

module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    postCharacter: catchedAsync(require("./postCharacter")),
    updateCharacter: catchedAsync(require("./updateCharacter")),
    deleteCharacter: catchedAsync(require("./deleteCharacter")),
}
