import { Request, Response } from "express";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const analyzeSkillGap = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      currentSkills,
      desiredRole,
    } = req.body;

    const completion =
      await groq.chat.completions.create({
        model:
          "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "You are a career mentor. Analyze skill gaps and provide missing skills, roadmap, and recommendations.",
          },
          {
            role: "user",
            content: `
Current Skills:
${currentSkills}

Desired Role:
${desiredRole}

Give:
1. Missing Skills
2. Learning Roadmap
3. Career Advice
`,
          },
        ],
      });

    res.status(200).json({
      result:
        completion.choices[0]
          ?.message?.content,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "AI analysis failed",
    });
  }
};