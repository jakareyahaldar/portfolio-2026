import { connectDb } from "@/lib/connectDb"
import { adminModel } from "@/models/adminModel"
import jwt from "jsonwebtoken"



export const POST = async (Request)=>{
    await connectDb()
    try{
        const body = await Request.json()
        if(!body) throw new Error("credentials not found...")
        const { username, password } = body
        if(!username) throw new Error("Please enter username..")
        if(!password) throw new Error("Please enter password..")

        // check is admin have or not 
        const admins = await adminModel.find()
        const isHaveAdmin = admins.length > 0

        // is admin not have then create admin using this cred
        if(!isHaveAdmin){
            const admin = new adminModel({ username, password })
            const saved = await admin.save()
            // genarate jwt token and send to client
            const token = jwt.sign({ username: saved.username, password: saved.password }, 'jakareyahaldar2005');
            return Response.json({token},{status: 200})
        }else{
            const admin = admins[0]
            const isUserMatch = admin.username === username
            const isPassMatch = admin.password === password
            if(!isUserMatch) throw new Error("please enter right username.")
            if(!isPassMatch) throw new Error("please enter right password.")
            const token = jwt.sign({ username: admin.username, password: admin.password }, 'jakareyahaldar2005');
            return Response.json({token},{status: 200})
        }
        
    }catch(err){
        console.log(err)
        return Response.json({error: err.message},{status: 500})
    }
}