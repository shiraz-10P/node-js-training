const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const products = [];

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product', productCSS: true, formsCSS: true, activeAddProduct: true });
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;