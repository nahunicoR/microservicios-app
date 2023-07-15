const { Router } = require("express");
const controllers = require("../controllers/index");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getPlanets);
router.post("/", middlewares.planetsValidation, controllers.postPlanets);
router.put("/", middlewares.planetsValidation, controllers.updatePlanet);

module.exports = router;