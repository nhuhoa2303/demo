const db = require('../models')
const prod = db.products;


let createProduct = (req, res) => {
}

let findAll = (req, res) => {
    prod.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

module.exports = {findAll, createProduct}
