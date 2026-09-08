import AddProjectNavigation from "@/app/_components/AddProjectNavigation"
import { Delete, Edit, PlusCircleIcon, PlusIcon } from "lucide-react"
import Image from "next/image"
const baseURL = process.env.NEXT_PUBLIC_BASE_URL


export default async function page() {

  async function getProject() {
    try {
      const req = await fetch(baseURL + "/api/project")
      if (!req.ok) return []
      const projects = await req.json()
      return projects
    } catch (err) {
      console.log(err)
    }
  }

  const projects = await getProject()

  return (
    <div className="  p-10">
        <div className="flex justify-between items-center  mb-10 border-b pb-2">
          <h3 className="font-semibold">Manage Projects</h3>
          <AddProjectNavigation />
        </div>
        <table className="border shadow rounded-3xl overflow-hidden">
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
              projects.map((project, index) => {
                return (
                  <tr key={project.title} className={`${index % 2 === 0 ? "" : "bg-amber-50"} border-b`}>
                    <Td data={<Image className="h-15 w-15 object-cover" src={project.logo} height={100} width={100} alt="logo" />} />
                    <Td data={project.title} />
                    <Td data={project.description.slice(0,50)+"...."} />
                    <Td data={<div className="flex gap-5">
                      <Delete className="hover:scale-125 transition duration-500" />
                      <Edit className="hover:scale-125 transition duration-500" />
                    </div>}/>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
  )
}

function Td({ data }) {
  return <td className="p-5">{data}</td>
}