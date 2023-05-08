const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product', productCSS: true, formsCSS: true, activeAddProduct: true });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {docTitle: 'Shop', prods: products, path: '/', productCSS: true, activeShop: true});
    });
}
