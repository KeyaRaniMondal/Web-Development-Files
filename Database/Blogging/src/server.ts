import app from "./app"
import config from "./config"

const PORT=config.PORT

async function main(){
    try{
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
    }
    catch(err){
        console.error("Error starting server:", err)
        process.exit(1)
    }
}
main()