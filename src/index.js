import dotenv from "dotenv";
import connectDB from "./db/index.js"
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.error("Error with app :",error)
    })
    const port=process.env.PORT
    app.listen(port,()=>{
        console.info('listening on port',process.env.PORT)
    })
})
.catch((err)=>{
    console.error("MongoDB connection Failed :" , err)
})
