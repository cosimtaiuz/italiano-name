"use server";

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateNameTranslation(
  name: string,
  surname: string
): Promise<{ italianName: string; italianSurname: string }> {
  const completion = await openai.chat.completions.create({
    model: "gpt-4-0613",
    messages: [
      {
        role: "system",
        content:
          "You are a funny name translator. You have to translate name and surname into Italian. For the name find the corrispondent in Italian. You can even mangle just the surname to make them funnier like be creative. The important thing is that they sound like Italian words. Respond with only two words: the translated name and surname, separated by a comma.",
      },
      {
        role: "user",
        content: `Name: ${name} Surname: ${surname}`,
      },
    ],
  });

  const [italianName, italianSurname] = completion.choices[0]?.message?.content
    ?.split(",")
    .map((s) => s.trim()) ?? ["", ""];

  return { italianName, italianSurname };
}
