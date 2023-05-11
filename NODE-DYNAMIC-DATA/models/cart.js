const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');
const cartPath = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(cartPath, (err, data) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(data);
            }
            const existingProductIdx = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIdx];

            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty += 1;
                cart.products = [...cart.products];
                cart.products[existingProductIdx] = updatedProduct;
            }
            else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice += +productPrice;
            fs.writeFile(cartPath, JSON.stringify(cart), (err) => {
                console.log(err);
            })
        })
    }
}