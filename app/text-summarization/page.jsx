"use client"
import { useState } from "react";
import BasicButton from "../components/Button/BasicButton";

const TextSummarizationPage = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [minLength, setMinLength] = useState(10);
  const [maxLength, setMaxLength] = useState(10);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleMinLengthChange = (e) => {
    setMinLength(parseInt(e.target.value));
  };

  const handleMaxLengthChange = (e) => {
    setMaxLength(parseInt(e.target.value));
  };

  const processTextSummarization = async () => {
    if (minLength < 10 || maxLength < 10) {
      alert("Minimum and maximum lengths should be at least 10.");
      return;
    }
    setIsLoading(true);
    const data = await fetch("http://localhost:3000/api/text-summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, minLength, maxLength }),
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
    <div className="flex flex-col items-center mt-8 text-black">
      <div className="w-full">
        <textarea
          className="w-full h-40 p-4 bg-black text-white border border-white resize-none"
          placeholder="Enter your text here..."
          value={text}
          onChange={handleTextChange}
        />
        <div className="flex lg:flex-row flex-col gap-4 justify-center w-full p-8">
          <div className="flex flex-col">
            <label htmlFor="minLength">Minimum Length:</label>
            <input
              id="minLength"
              type="number"
              className="mr-2 p-2 bg-black text-white border border-white"
              placeholder="Min Length"
              value={minLength}
              onChange={handleMinLengthChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="maxLength">Maximum Length:</label>
            <input
              id="maxLength"
              type="number"
              className="mr-2 p-2 bg-black text-white border border-white"
              placeholder="Max Length"
              value={maxLength}
              onChange={handleMaxLengthChange}
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
    </div>
  );
};

export default TextSummarizationPage;
