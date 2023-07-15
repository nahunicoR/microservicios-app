const {catchedAsync} = require("../utils");

module.exports = {
    getFilms: catchedAsync(require("./getFilms")),
    postFilm: catchedAsync(require("./postFilm")),
    updateFilm: catchedAsync(require("./updateFilm")),
    deleteFilm: catchedAsync(require("./deleteFilm")),
}
