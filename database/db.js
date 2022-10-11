import { Sequelize } from "sequelize";


export const db = new Sequelize('practica','osmait','123456',{
    host:process.env.HOST,
    dialect:'postgres'
})



