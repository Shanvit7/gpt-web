"use client"
import { useState } from "react";
import BasicButton from "../components/Button/BasicButton";

const TextSummarizationPage = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summaryPercent,setSummaryPercent] = useState(10);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };


  const handleSummaryPercentChange = (e) => {
    setSummaryPercent(parseInt(e.target.value));
  };

  const processTextSummarization = async () => {
    if(summaryPercent < 5){
      alert("Summary percent can't be less than 5%");
      setSummaryPercent(5);
      return;
    }
    setIsLoading(true);
    const data = await fetch("http://localhost:3000/api/text-summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, summaryPercent }),
    });
    const response = await data.json();
    if (response?.summary) {
      setIsLoading(false);
      setSummary(response?.summary);
    } else {
      setIsLoading(false);
      setSummary("Something went wrong. Please try again later!");
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
        <div className="flex lg:flex-row flex-col gap-4 justify-center w-full p-8">
          <div className="flex flex-col">
            <label htmlFor="summaryPercent">Summary Percent:</label>
            <input
              id="summaryPercent"
              type="number"
              className="mr-2 p-2 bg-black text-white border border-white"
              placeholder="Max Length"
              value={summaryPercent}
              onChange={handleSummaryPercentChange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
        <BasicButton onClick={processTextSummarization} disabled={isLoading}>
            {isLoading ? "Summarizing..." : "Summarize"}
          </BasicButton>
        </div>
        {!summary && (
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
        {summary && (
          <div className="mt-8">
            <hr className="bg-black border p-1" />
            <h2 className="p-4 lg:p-8">Summary:</h2>
            <p className="p-4 lg:p-8">{summary}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TextSummarizationPage;
