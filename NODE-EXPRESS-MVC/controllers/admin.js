const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { docTitle: 'Add Product', path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) => {
    const body = req.body;
    const product = new Product(body.title, body.imgURL, body.description, body.price);
    product.save();
    res.redirect('/');
}

exports.getAdminProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', { docTitle: 'Admin Products', path: '/admin/products', prods: products})
    });
}