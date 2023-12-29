import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const PaidPlan = sequelize.define('paidPlan', {
  idPaidPlan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  planName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  planCost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
})

export default PaidPlan;