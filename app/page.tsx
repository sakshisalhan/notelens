"use client";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer || data.error || "No response returned.");
    } catch (error) {
      setAnswer("Something went wrong while calling the API.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">NoteLens</h1>

      <p className="text-lg text-gray-600 mb-6 text-center">
        Ask questions from your course documents
      </p>

      <textarea
        className="w-full max-w-xl border p-3 rounded-md mb-4"
        placeholder="Paste your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={handleAsk}
        className="bg-black text-white px-6 py-2 rounded-md"
      >
        Ask
      </button>

      {answer && (
        <p className="mt-4 max-w-xl text-center">
          <strong>Answer:</strong> {answer}
        </p>
      )}
    </main>
  );
}