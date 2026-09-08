"use client"

import { PlusCircleIcon } from "lucide-react"
import { useRouter } from "next/navigation"
export default function AddProjectNavigation() {
    const router = useRouter()
  return (
    <><button onClick={()=> router.push("/admin/project/add")}>
        <PlusCircleIcon />
    </button></>
  )
}
