import mongoose from "mongoose"

const mongoURI = process.env.NEXT_PUBLIC_MONGODB_URI

export const connectDb = async ()=>{
    try{
        if(mongoose.connection.readyState === 1){
            console.log("alrady connected...")
            return
        }

        await mongoose.connect(mongoURI,{
            dbName: "passwordManager"
        })
        console.log("database connected..")
    }catch(err){
        console.log(err)
        console.log("database not connected!")
        process.exit()
    }
}