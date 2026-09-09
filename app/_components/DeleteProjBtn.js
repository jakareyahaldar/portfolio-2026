"use client"

import { Delete } from "lucide-react"

export default function DeleteProjBtn({id}) {

function DeleteProjectHandler(){
    console.log(id)
  }

  return <Delete onClick={DeleteProjectHandler} className="hover:scale-125 transition duration-500" />
}
