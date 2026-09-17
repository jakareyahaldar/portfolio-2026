import { connectDb } from "@/lib/connectDb"
import { ProjectModel } from "@/models/projectModel"
import { adminModel } from "@/models/adminModel"
import jwt from "jsonwebtoken"


async function checkIsAdmin(req){
    console.log(req.headers)
    try{
        const myCookie = req.cookies.get("admin_jack")?.value
        if(!myCookie) return false
        const decoded = jwt.verify(myCookie, 'jakareyahaldar2005');
        console.log(`decoded cookie: ${decoded}`)
        if(!decoded) return false
        const {username, password} = decoded
        const admin = await adminModel.findOne({username,password})
        if(admin) return true
        if(!admin) return false
    }catch(err){
        return(false)
    }
}


export const POST = async (Request)=>{
    console.log("Cookies:", Request.cookies.getAll())
    await connectDb()
    const isAdmin = await checkIsAdmin(Request)
    try{
        if(!isAdmin) throw new Error("invalid admin.")
        const body = await Request.json()
        if(!body) throw new Error("project data not found!")
        const project = new ProjectModel(body)
        const data = await project.save()
        return Response.json(data,{ status: 200 })
    }catch(err){
        return Response.json({error:err.message}, {status: 404})
    }
}

export const GET = async (Request)=>{
    await connectDb()
    try{
        const projects = await ProjectModel.find()
        return Response.json(projects,{ status: 200 })
    }catch(err){
        console.log(err)
         return Response.json({error: "server error"},{ status: 500 })
    }
}

export const DELETE = async (Request)=>{
    await connectDb()
    const isAdmin = await checkIsAdmin(Request)
    if(!isAdmin) return Response.json({error: "Invalid admin."},{status:500})
    try{
        const body = await Request.json()
        if(!body) throw new Error("id not found")
        const deleteRes = await ProjectModel.findOneAndDelete({_id: body.id})
        return Response.json({id: body.id})
    }catch(err){
        return Response.json({error: err.message},{status: 500})
    }
}