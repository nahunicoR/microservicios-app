const {Router} = require('express');
const {validateModel} = require('../middlewares');
const controllers = require("../controller/index");
const router = Router();


router.get('/:model', validateModel, controllers.getModels) ;

router.get('/:model/:id', validateModel, controllers.getModelId);

router.post('/:model/create', validateModel, controllers.postModel);

router.put("/:model/update/:id", validateModel, controllers.putModel);

router.delete("/:model/delete/:id", validateModel, controllers.deleteModel);

module.exports = router;