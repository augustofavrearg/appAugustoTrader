// models/admin.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const Admin = sequelize.define('userAdmin', {
  AdminName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

export default Admin;
