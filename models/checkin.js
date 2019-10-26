'use strict';
module.exports = (sequelize, DataTypes) => {
  const checkin = sequelize.define('checkin', {
    costumer_id: {
      type : DataTypes.INTEGER,
      references: {
        model: 'costumers',
        key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    },
    room_id: {
      type : DataTypes.INTEGER,
      references: {
        model: 'rooms',
        key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    },
    is_booked: DataTypes.BOOLEAN,
    is_done: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
    order_end_time: DataTypes.TIME
  }, {});
  checkin.associate = function(models) {
    checkin.belongsTo(models.costumer,{
      as : 'costumer',
      foreignKey : 'costumer_id'
    })
    checkin.belongsTo(models.room,{
      as : 'room',
      foreignKey : 'room_id'
    })
  };
  return checkin;
};