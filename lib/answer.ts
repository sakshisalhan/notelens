export function getAnswerFromNotes(notes: string, question: string): string {
  const normalizedQuestion = question.toLowerCase().trim();
  const lines = notes.split("\n").filter((line) => line.trim() !== "");

  for (const line of lines) {
    const [topic, ...rest] = line.split(":");
    const content = rest.join(":").trim();

    if (topic && normalizedQuestion.includes(topic.toLowerCase())) {
      return content;
    }
  }

  return "No relevant answer found in notes.";
}