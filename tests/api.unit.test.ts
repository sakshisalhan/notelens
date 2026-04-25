import { describe, it, expect } from "vitest";

// Simulate your logic
function getAnswer(question: string): string {
  question = question.toLowerCase();

  if (question.includes("what is ai") || question.includes("artificial intelligence")) {
  return "Artificial Intelligence (AI) is the simulation of human intelligence by machines.";
}

  if (question.includes("machine learning")) {
    return "Machine Learning is a subset of AI that allows systems to learn from data.";
  }

  return "No relevant answer found in notes.";
}

describe("API Logic Tests", () => {
  it("should return AI definition", () => {
    const result = getAnswer("What is AI?");
    expect(result).toContain("Artificial Intelligence");
  });

  it("should return ML definition", () => {
    const result = getAnswer("Explain machine learning");
    expect(result).toContain("Machine Learning");
  });

  it("should handle unknown question", () => {
    const result = getAnswer("What is blockchain?");
    expect(result).toBe("No relevant answer found in notes.");
  });

  it("should handle artificial intelligence synonym", () => {
  const result = getAnswer("Explain artificial intelligence");
  expect(result).toContain("Artificial Intelligence");
});
});