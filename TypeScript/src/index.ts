import {createServer} from "node:http"
const server=createServer((req,res)=>{
    res.end("hello")
})

server.listen(3000,()=>{
    console.log("server is runnign on port 3000");
})