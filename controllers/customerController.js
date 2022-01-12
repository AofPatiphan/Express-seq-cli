const { Customer } = require('../models/index');

exports.getAllCustomer = async (req, res, next) => {
    try {
        const customer = await Customer.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        res.status(200).json({ customer });
    } catch (err) {
        next(err);
    }
};

exports.getCustomerById = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};

exports.createCustomer = async (req, res, next) => {
    try {
        const { name, address, phoneNumber } = req.body;
        const customer = await Customer.create({ name, address, phoneNumber });
        res.status(201).json({ customer });
    } catch (err) {
        next(err);
    }
};

exports.updateCustomer = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};

exports.deleteCustomer = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};
