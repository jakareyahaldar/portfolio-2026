import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_APIKEY });

export async function askAi(messages) {
  const chatCompletion = await getGroqChatCompletion(messages);
  // Print the completion returned by the LLM.
  return chatCompletion.choices[0]?.message?.content || "not replyed anything"
}

export async function getGroqChatCompletion(message) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
        You are a agent for answer questions about ME. My Name is Jakareya Haldar I am a web devoloper.

        MY Experieance: 
        I am expert on Mern stack devolopment and also full stack devolopment.
        I learned: html, css, javascript, tailwind.css, react.js. next.js, mongodb, nodejs, python, redux, supabase, php


        ##OUTPUT Example: 
        #Output should humanize.
        #You answer like you are me.
        dont over explain answer like a human and keep message short.

        `,
      },
      ...message
    ],
    model: "openai/gpt-oss-20b",
  });
}
