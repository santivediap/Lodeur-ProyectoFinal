const express = require('express');

// Rutas de productos
const productsApiController = require("../controllers/productsControllers");
const productsApiRouter = express.Router();

productsApiRouter.post('/', productsApiController.createProduct);
productsApiRouter.get('/', productsApiController.getProducts);
productsApiRouter.get('/search', productsApiController.getProductsByTitleOrProvider);
productsApiRouter.put('/', productsApiController.updateProduct);
productsApiRouter.delete('/', productsApiController.deleteProduct);

module.exports = productsApiRouter;