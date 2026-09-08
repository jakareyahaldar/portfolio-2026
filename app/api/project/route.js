import { connectDb } from "@/lib/connectDb"
import { ProjectModel } from "@/models/projectModel"

export const POST = async (Request)=>{
    await connectDb()
    try{
        const body = await Request.json()
        if(!body) throw new Error("project data not found!")
        const project = new ProjectModel(body)
        const data = await project.save()
        return Response.json(data,{ status: 200 })
    }catch(err){
        console.log(err.message)
        return Response.json({error:err.message}, {status: 404})
    }
}

export const GET = async ()=>{
    await connectDb()
    try{
        console.log(">>>>>>>>>")
        const projects = await ProjectModel.find()
        return Response.json(projects,{ status: 200 })
    }catch(err){
        console.log(error)
         return Response.json({error: "server error"},{ status: 500 })
    }
}