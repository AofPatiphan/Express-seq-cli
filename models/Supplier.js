module.exports = (sequelize, DataTypes) => {
    const Supplier = sequelize.define(
        'Supplier',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            address: {
                type: DataTypes.STRING,
            },
            phoneNumber: {
                type: DataTypes.STRING,
            },
        },
        {
            underscored: true,
        }
    );

    Supplier.associate = (models) => {
        Supplier.hasMany(models.Product, {
            foreignKey: {
                name: 'supplierId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
        });
    };

    return Supplier;
};
