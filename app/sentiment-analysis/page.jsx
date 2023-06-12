"use client";
/********* UTILS  **********/
import { useState } from "react";
/********* COMPONENTS **********/
import BasicButton from "../components/Button/BasicButton";
import Loader from "../components/Loaders/Loader";

const SentimentAnalysisPage = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const processTextAnalysis = async () => {
    setIsLoading(true);
    const data = await fetch("/api/sentiment-analysis", {
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
        <div className="flex justify-center items-center mt-4">
          {isLoading ? (
            <div className="flex justify-center items-center">
                 <Loader />
            </div>
          ) : (
            <BasicButton onClick={processTextAnalysis} disabled={isLoading}>
              Analyse
            </BasicButton>
          )}
        </div>
        {!sentiment && (
          <div className="p-4 text-center text-2xl">
            <h1 className="pb-4">How does it work ?</h1>
            <h4>
              Text sentiment analysis is a natural language processing technique
              used to determine the emotional tone conveyed in a piece of text,
              such as positive, negative, or neutral. It involves analyzing the
              words, phrases, and context to gauge the sentiment expressed. This
              analysis helps in understanding public opinion, customer feedback,
              and social media sentiment, enabling businesses to make informed
              decisions and tailor their responses accordingly.
            </h4>
          </div>
        )}
        {sentiment && (
          <div className="mt-8">
            <hr className="bg-black border p-1" />
            <h1 className="text-center text-bold text-xl p-2">
              Sentiment:&nbsp;{sentiment.toUpperCase()}
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default SentimentAnalysisPage;
