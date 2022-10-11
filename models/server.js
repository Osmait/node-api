import express from "express";
import { db } from "../database/db.js";
import router from '../router/userRouter.js'
import cors from 'cors'




class Server {

    constructor(){
        this.app = express()
        this.port =process.env.PORT || 8000
        this.routers()
        
        this.dbConnection()
        this.middlewares()
    }

    

    listen(){
        this.app.listen(this.port,() => { 
            console.log(`Server on port ${this.port}`)
        })
    }

    routers(){
        this.app.use('/api',router)
    }


   async dbConnection(){
        try {
            db.authenticate()
            console.log('DataBase Ready')
        } catch (error) {
            throw new Error(error)
        }
    }


    middlewares(){
        this.app.use( express.json() );

        this.app.use(cors)
    }
}


export default Server