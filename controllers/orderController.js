const {
    Order,
    OrderItem,
    Customer,
    Product,
    sequelize,
} = require('../models/index');

exports.getAllOrder = async (req, res, next) => {
    try {
        const order = await Order.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        res.status(200).json({ order });
    } catch (err) {
        next(err);
    }
};

exports.getOrderById = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};

exports.createOrder = async (req, res, next) => {
    const transaction = await sequelize.transaction();

    try {
        const { date, customerId, employeeId, orderItems } = req.body;
        const order = await Order.create(
            {
                date,
                customerId,
                employeeId,
            },
            { transaction: transaction }
        );
        // res.status(201).json({ order });
        const newOrderItems = orderItems.map((item) => ({
            ...item,
            orderId: order.id,
        }));
        await OrderItem.bulkCreate(newOrderItems, { transaction: transaction });
        await transaction.commit();

        const returnOrder = await Order.findOne({
            where: { id: order.id },
            attributes: {
                exclude: ['createAt', 'updateAt'],
            },
            include: [
                {
                    model: Customer,
                    attributes: ['name'],
                },
                {
                    model: OrderItem,
                    attributes: ['price', 'amount', 'discount'],
                    include: {
                        model: Product,
                        attributes: ['name'],
                    },
                },
            ],
        });
        res.status(201).json({ order: returnOrder });
    } catch (err) {
        await transaction.rollback();
        next(err);
    }
};

exports.updateOrder = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};

exports.deleteOrder = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};
