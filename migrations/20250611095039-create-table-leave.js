'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('leave', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    full_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    department: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    leave_id: {
      type: Sequelize.INTEGER(2),
      allowNull: false,
      references: {
        model: 'leave_type',
        key: 'id',
      },
    },
    reason:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone:{
      type: Sequelize.STRING,
      allowNull: false,
    }
    ,
    leave_start_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    leave_end_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('leave');
}
