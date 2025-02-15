const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.post('/add', async (req, res) => {
    const { name, price } = req.body;
    try {
        const product = new Product({ name, price });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;