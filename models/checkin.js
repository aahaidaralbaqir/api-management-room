'use strict';
module.exports = (sequelize, DataTypes) => {
  const checkin = sequelize.define('checkin', {
    costumer_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    is_booked: DataTypes.BOOLEAN,
    is_done: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
    order_end_time: DataTypes.TIME
  }, {});
  checkin.associate = function(models) {
    // associations can be defined here
  };
  return checkin;
};