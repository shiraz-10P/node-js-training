const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');
const productsPath = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = callback => {
    fs.readFile(productsPath, (err, data) => {
        if (err) {
            console.log(err);
            callback([]);
        } else {
            callback(JSON.parse(data));
        }
    });
}

module.exports = class Product {
    constructor(title, imgURL, description, price) {
        this.title = title;
        this.imgURL = imgURL;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);

            fs.writeFile(productsPath, JSON.stringify(products), err => {
                console.log(err);
            });

        });
    }

    static fetchAll(callback) {
        getProductsFromFile(callback);
    }
}
