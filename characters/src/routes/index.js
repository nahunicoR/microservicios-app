const { Router } = require("express");
const controllers = require("../controller/index");
const middlewares = require("../middlewares");

const router = Router();

router.get("/",controllers.getCharacters);
router.post("/create", middlewares.characterValidation,controllers.postCharacter);
router.put("/update/:_id", controllers.updateCharacter);
router.delete("/delete/:_id", controllers.deleteCharacter);

module.exports = router;
