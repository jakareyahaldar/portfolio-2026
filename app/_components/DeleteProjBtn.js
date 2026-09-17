"use client"

import { Delete } from "lucide-react"

export default function DeleteProjBtn({id}) {

async function DeleteProjectHandler(){
    if(!id) return
    try{
      const req = await fetch("/api/project",{
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({id})
      })
      const res = await req.json()
      if(req.ok){
        window.location.reload()
      }else{
        alert(res.error)
      }
    }catch(err){
      console.log(err)
    }
  }

  return <Delete onClick={DeleteProjectHandler} className="hover:scale-125 transition duration-500" />
}
