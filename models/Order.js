module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
        'Order',
        {
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
        },
        {
            underscored: true,
        }
    );

    Order.associate = (models) => {
        Order.belongsTo(models.Customer, {
            foreignKey: {
                name: 'customerId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
        });

        Order.belongsTo(models.Employee, {
            foreignKey: {
                name: 'employeeId',
            },
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
        });

        Order.hasMany(models.OrderItem, {
            foreignKey: {
                name: 'orderId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
        });
    };

    return Order;
};
