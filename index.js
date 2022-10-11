import * as dotenv from "dotenv"
import Server from "./models/server.js"
import './models/User.js'

dotenv.config()

const server = new Server()

server.listen()







