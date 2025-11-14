import OpenAI from "openai";

export const ai_conf = new OpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.API_KEY,
});

// Run your chat completions
// const chatCompletions = await openai.chat.completions.create({
//   model: "mistralai/Mistral-7B-Instruct-v0.2",
//   max_tokens: 4096,
//   messages: [
//     { role: "system", content: "You are a helpful assistant." },
//     { role: "user", content: "What is the fastest way to get to the airport?" },
//   ],
// });

// chatCompletions.choices.forEach((choice) => {
//   console.log(choice.message.content);
// });
