const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leave', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    department: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    leave_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'leave_type',
        key: 'id'
      }
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    leave_start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    leave_end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'leave',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "leave_id",
        using: "BTREE",
        fields: [
          { name: "leave_id" },
        ]
      },
    ]
  });
};
