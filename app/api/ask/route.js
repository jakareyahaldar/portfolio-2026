import { askAi } from "@/lib/groq"

export const POST = async (Request) => {
    try {
        const messages = await Request.json()
        if(!messages || !Array.isArray(messages) || messages.length === 0) throw new Error("Invalid messages.")
        const agentMessage = await askAi(messages)
        return Response.json({ message: agentMessage })
    } catch (error) {
        return Response.json({error: error.message},{status: 500})
    }

}