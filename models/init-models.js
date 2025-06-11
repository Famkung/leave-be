var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _leave = require("./leave");
var _leave_type = require("./leave_type");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var leave = _leave(sequelize, DataTypes);
  var leave_type = _leave_type(sequelize, DataTypes);

  leave.belongsTo(leave_type, { as: "leave", foreignKey: "leave_id"});
  leave_type.hasMany(leave, { as: "leaves", foreignKey: "leave_id"});

  return {
    SequelizeMeta,
    leave,
    leave_type,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
