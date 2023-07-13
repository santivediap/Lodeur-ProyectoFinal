const express = require('express');

// Rutas de providers
const providersApiController = require("../controllers/providersControllers");
const providersApiRouter = express.Router();

providersApiRouter.post('/', providersApiController.createProvider);
providersApiRouter.get('/', providersApiController.getProviders);
providersApiRouter.delete('/', providersApiController.deleteProvider);

module.exports = providersApiRouter;