const express = require('express')
const router = express.Router();
const productController = require('../controller/ProductController')
const initRoutesAPI = (app) => {
    router.get('/', productController.findAll);

    return app.use('/api', router)



}
module.exports = initRoutesAPI;
