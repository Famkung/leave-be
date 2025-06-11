'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('leave_type', {
    id: {
      type: Sequelize.INTEGER(2),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    active: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 1,
    }
  });

  await queryInterface.bulkInsert('leave_type', [
    { id: 1, name: 'Sick Leave' },
    { id: 2, name: 'Personal Leave' },
    { id: 3, name: 'Annual Leave' },
    { id: 4, name: 'Others' },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('leave_type');
}
