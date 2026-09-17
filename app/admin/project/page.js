"use client"

import AddProjectNavigation from "@/app/_components/AddProjectNavigation"
import DeleteProjBtn from "@/app/_components/DeleteProjBtn"
import { Delete, Edit, PlusCircleIcon, PlusIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
const baseURL = process.env.NEXT_PUBLIC_BASE_URL


export default function page() {

  const [projects, setProjects] = useState([])
  
    async function getProject(){
      const url = baseURL+"/api/project"
      try{
        const req = await fetch(url)
        console.log("is req ok: ",req.ok)
        if(!req.ok) return []
        const projects = await req.json()
        setProjects(projects)
      }catch(err){
        console.log("error from getting project on home: ",err)
      }
    }
  
    useEffect(()=>{
      getProject()
    },[])




  return (
    <div className="w-full p-10">
      <div className="flex justify-between items-center  mb-10 border-b pb-2">
        <h3 className="font-semibold">Manage Projects</h3>
        <AddProjectNavigation />
      </div>
      <div className="w-full overflow-x-scroll scrollbar-thin">
        <table className="w-full">
          <thead>
            <tr className="">
              <th>Logo</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              projects?.map((project, index) => {
                return (
                  <tr key={project.title} className={`${index % 2 === 0 ? "" : "bg-amber-50"} border-b`}>
                    <Td data={<Image className="h-15 w-15 object-cover" src={project.logo} height={100} width={100} alt="logo" />} />
                    <Td data={project.title} />
                    <Td data={project.description.slice(0, 50) + "...."} />
                    <Td data={<div className="flex gap-5">
                      <DeleteProjBtn id={project._id} />
                      <Edit className="hover:scale-125 transition duration-500" />
                    </div>} />
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Td({ data }) {
  return <td className="p-5">{data}</td>
}