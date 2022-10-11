import { DataTypes,} from "sequelize";
import { db } from "../database/db.js";


export const User = db.define('User', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique:true
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false
    
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true

    },

  });
  
