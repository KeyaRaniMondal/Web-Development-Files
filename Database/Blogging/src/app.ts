import express,{Application} from "express"
import {Request, Response} from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

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

export default app