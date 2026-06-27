import express,{Application} from "express"
import {Request, Response} from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { userRoutes } from "./modules/user/user.route"
import { AuthRoutes } from "./modules/auth/auth.route"
const app:Application =express()

//middlewares
app.use(cors({
    origin:'http://localhost:5000/',
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



app.get("/",(req:Request, res:Response)=>{
    res.send("Hello World")
})
//user post route
app.use("/api/users", userRoutes)
app.use('/api/auth',AuthRoutes)

export default app