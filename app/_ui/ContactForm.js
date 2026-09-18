"use client"

import { send, init } from "@emailjs/browser";
import { Send } from "lucide-react";
import { useState } from "react";


export default function ContactForm() {

    const [submitting, setSubmitting] = useState(false)
    

async function onSubmitHandler(e){
    e.preventDefault()
    try{
        setSubmitting(true)
        console.log(submitting)
        await init({
            publicKey: "jfQTMaa3YES6jaC_Z"
        })
        const name = e.target.name.value
        const email = e.target.email.value
        const message = e.target.text.value
        if( !name || !email || !message ){
            alert("Pleasae fill all field.")
            return
        }
        await send("service_9isfib7","template_nkuie0a", {name,email,message})

        // set empty all inputs 
        e.target.name.value = ""
        e.target.email.value = ""
        e.target.text.value = ""

        setSubmitting(false)
        alert("Successfully Sended Email I will contact you very soon.")
    }catch(err){
        console.log(err)
    }finally{
        setSubmitting(false)
    }
}

  return (
    <form onSubmit={onSubmitHandler} className=" md:w-[600] w-full text-lg p-5 rounded-2xl" >
        <div className="grid gap-2 ">
            <label>Name</label>
            <input className="px-2 py-1 rounded-md border border-gray-400 mb-5" type="name" placeholder="Enter your Name: " name="name" />
        </div>
        <div className="grid gap-2">
            <label>Email</label>
            <input className="px-2 py-1 rounded-md border border-gray-400 mb-5" type="name" placeholder="Enter your Email: " name="email" />
        </div>
        <div className="grid gap-2">
            <label>Message</label>
            <textarea name="text" placeholder="Enter your Message" rows={4} className="px-2 py-1 rounded-md border border-gray-400 mb-5"></textarea>
        </div>
        {
            submitting ? (
                <button className="flex items-center gap-5 px-10 my-5 py-2 border rounded-md animate-pulse">Sending..</button>
            ) : (
                <button className="flex items-center gap-5 px-10 my-5 py-2 border rounded-md hover:bg-blue-400 transition duration-500">Submit <Send /></button>
            )
        }
    </form>
  )
}
