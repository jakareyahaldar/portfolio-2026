"use client"

import Image from "next/image";


export default function TechCard({title,items}) {

  return (
    <div  className="text-center">
        <h4 className="md:text-3xl text-2xl font-semibold my-10">{title}<span className="text-blue-700">()</span></h4>
        <div className="grid grid-cols-5 gap-5 gap-y-10">
            {
                items.map((item)=>{
                    return(
                        <div key={item.title} className=" flex flex-col justify-center items-center gap-5 hover:scale-110 transition">
                            <Image className="w-[30] md:w-[50]" src={item.image} height={50} width={50} alt="Html" />
                            <p>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
