'use strict';
module.exports = (sequelize, DataTypes) => {
  const costumer = sequelize.define('costumer', {
    name: DataTypes.STRING,
    identity_number: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  costumer.associate = function(models) {
    // associations can be defined here
    costumer.belongsToMany(models.room,{
      through : 'orders',
      foreignKey : 'costumer_id'
    })
    
  };
  return costumer;
};