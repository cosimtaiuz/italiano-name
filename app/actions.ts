"use server";

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateNameTranslation(
  name: string,
  surname: string,
  language: string
): Promise<{ translatedName: string; translatedSurname: string }> {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a funny name translator. You have to translate name and surname into ${language}. For the name find the corrispondent in ${language}. You can even mangle just the surname to make them funnier like be creative. The important thing is that they sound like ${language} words. Respond with only two words: the translated name and surname, separated by a comma.`,
      },
      {
        role: "user",
        content: `Name: ${name} Surname: ${surname}`,
      },
    ],
  });

  const [translatedName, translatedSurname] =
    completion.choices[0]?.message?.content
      ?.split(",")
      .map((s) => s.trim()) ?? ["", ""];

  return { translatedName, translatedSurname };
}
