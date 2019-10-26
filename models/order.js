'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    costumer_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    is_booked: DataTypes.BOOLEAN,
    is_done: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
    order_end_time: DataTypes.TIME
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};