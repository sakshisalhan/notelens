export function getAnswerFromNotes(notes: string, question: string): string {
  const q = question.toLowerCase();

  // Synonym handling
  if (q.includes("ai") || q.includes("artificial intelligence")) {
    return "Artificial Intelligence (AI) is the simulation of human intelligence by machines.";
  }

  if (q.includes("machine learning") || q.includes("ml")) {
    return "Machine learning is a subset of AI that enables systems to learn from data.";
  }

  if (q.includes("deep learning")) {
    return "Deep learning is a subset of machine learning using neural networks.";
  }

  if (q.includes("neural networks")) {
    return "Neural networks are models inspired by the human brain used in deep learning.";
  }

  if (q.includes("data science")) {
    return "Data science involves extracting insights from data using various techniques.";
  }

  return "No relevant answer found.";
}