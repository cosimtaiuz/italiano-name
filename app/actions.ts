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
        content: `You are a name translator. Your task is to translate a given first name and surname into ${language}. For the first name, find the exact equivalent in ${language}. For the surname try to find the exact translation, if there's no exact translation, take the orginal surname and mangle it to make it sound like a ${language} word. The main goal is to make the translations sound like words in ${language} and to be humorous. Please respond with only two words: the translated first name and surname, separated by a comma.`,
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
