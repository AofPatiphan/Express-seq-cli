module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                validate: {
                    min: 0.01,
                    isNumeric: true,
                },
            },
            description: {
                type: DataTypes.STRING,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    isInt: true,
                    min: 0,
                },
            },
        },
        {
            underscored: true,
        }
    );

    Product.associate = (models) => {
        Product.belongsTo(models.Supplier, {
            foreignKey: {
                name: 'supplierId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
        });

        Product.hasMany(models.OrderItem, {
            oreignKey: {
                name: 'productId',
            },
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
        });
    };
    return Product;
};
