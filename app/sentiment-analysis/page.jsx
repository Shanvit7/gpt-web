"use client"
import { useState } from "react";
import BasicButton from "../components/Button/BasicButton";

const SentimentAnalysisPage = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const processTextAnalysis = async () => {
    setIsLoading(true);
    const data = await fetch("http://localhost:3000/api/sentiment-analysis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const response = await data.json();
    if (response?.sentiment) {
      setIsLoading(false);
      setSentiment(response?.sentiment);
    } else {
      setIsLoading(false);
      setSentiment("Something went wrong. Please try again later!");
    }
  };

  return (
    <section className="flex flex-col items-center mt-8 text-black">
      <div className="w-full">
        <textarea
          className="w-full h-40 p-4 bg-black text-white border border-white resize-none"
          placeholder="Enter your text here..."
          value={text}
          onChange={handleTextChange}
        />
        <div className="flex justify-center items-center">
        <BasicButton onClick={processTextAnalysis} disabled={isLoading}>
            {isLoading ? "Analysing..." : "Analyse"}
          </BasicButton>
        </div>
        {!sentiment && (
          <div className="p-4 text-center">
            <h1 className="pb-4">How does it work ?</h1>
            <h4>
              Text summarization works by using algorithms and techniques to
              analyze a given text and extract its most important information.
              It involves identifying key sentences, phrases, or concepts and
              condensing them into a shorter summary. This can be achieved
              through extractive methods that select and arrange existing
              content, or through abstractive methods that generate new
              sentences based on the understanding of the original text. The
              goal is to provide a concise and meaningful summary that captures
              the essence of the source material.
            </h4>
          </div>
        )}
        {sentiment && (
          <div className="mt-8">
            <hr className="bg-black border p-1" />
            <h1 className="text-center text-bold text-xl p-2">Sentiment:&nbsp;{sentiment.toUpperCase()}</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default SentimentAnalysisPage;
