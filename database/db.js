import { Sequelize } from "sequelize";


export const sequelize = new Sequelize("practica",'osmait', '123456',{
    host:'localhost',
    dialect:'postgres'
})



