const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', { docTitle: 'Shop', path: '/', prods: products });
    })
}

exports.getShopCart = (req, res, next) => {
    res.render('shop/cart', { docTitle: 'Cart', path: '/cart' })
}

exports.getShopProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/products-list', { docTitle: 'Products', path: '/products', prods: products });
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { docTitle: 'Checkout', path: '/checkout' })
}
