import { DataTypes,} from "sequelize";
import { db } from "../database/db.js";


export const User = db.define('User', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    
    }
  }, {
 
  });
  
