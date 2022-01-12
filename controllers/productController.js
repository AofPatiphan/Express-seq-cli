const { Product, sequelize } = require('../models/index');

exports.getAllProduct = async (req, res, next) => {
    try {
        const result = await sequelize.query('SELECT * FROM products');
        res.json({ result });
    } catch (err) {
        next(err);
    }
};

exports.getProductById = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const { name, price, description, quantity, supplierId } = req.body;
        const product = await Product.create({
            name,
            price,
            description,
            quantity,
            supplierId,
        });
        res.status(201).json({ product });
    } catch (err) {
        next(err);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};
