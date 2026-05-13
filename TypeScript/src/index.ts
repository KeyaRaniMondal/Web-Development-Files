import {createServer} from "node:http"
// const server=createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"application/json"})
//     res.end(JSON.stringify({message: "hello"}))
// })


const server = createServer((req, res) => {
    const url = req.url ?? "/"

    if (url === "/") {
        res.writeHead(200, { "content-type": "application/json" })
        return res.end(JSON.stringify({ message: "hello" }))
    }

    res.writeHead(404, { "content-type": "application/json" })
    res.end(JSON.stringify({ message: "not found" }))
})

const PORT = 3500

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})