const express = require('express');
const ProductosServiceMock = require('../services/productos');
const cacheResponse = require('../utils/cacheResponse');

const {
    FIVE_MINUTES_IN_SECONDS
  } = require('../utils/time');

function productosApi(app) {
    const router = express.Router();
    app.use('/api/productos', router);
  
    const productService = new ProductosServiceMock();
  
    router.get('/', async function(req, res, next) {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
  
      try {
        const productos = await productService.getProductosContratados();
  
      // throw new Error('Error to get movies');
        console.log(productos);
        res.status(200).json({
          data: productos,
          message: 'productos contratados'
        });
        
      } catch (err) {
        next(err);
      }
    });
}


module.exports = productosApi;