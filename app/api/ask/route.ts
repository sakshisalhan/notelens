import { getAnswerFromNotes } from "../../../lib/answer";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const question = body.question?.toLowerCase() || "";

    if (!question.trim()) {
      return Response.json({ error: "Please enter a question." }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "data", "notes.txt");
    const notes = fs.readFileSync(filePath, "utf-8");

    const answer = getAnswerFromNotes(notes, question);
return Response.json({ answer });
} catch (error) {
  return Response.json({ error: "Something went wrong." });
}
}