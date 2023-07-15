const { Router } = require("express");
const controllers = require("../controllers/index");
const middlewares = require("../middlewares");

const router = Router();

router.get("/",controllers.getFilms);
router.post("create/", middlewares.filmsValidation,controllers.postFilm);
router.put("/update/:id", middlewares.filmsValidation,controllers.updateFilm);
router.post("/delete/:id", middlewares.filmsValidation,controllers.deleteFilm);

module.exports = router;
