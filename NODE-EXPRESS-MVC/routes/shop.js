const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/cart', shopController.getShopCart);

router.get('/products', shopController.getShopProducts);

router.get('/checkout', shopController.getCheckout);

module.exports = router;