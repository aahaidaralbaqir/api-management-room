'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    name: DataTypes.STRING
  }, {});
  room.associate = function(models) {
    room.belongsToMany(models.costumer,{
      through : 'orders',
      foreignKey : 'room_id'
    })
  };
  return room;
};