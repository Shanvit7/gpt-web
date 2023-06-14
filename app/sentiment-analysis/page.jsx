"use client";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import BasicButton from "../components/Button/BasicButton";
import Loader from "../components/Loaders/Loader";
import Error from "../components/Icons/Error";
import ShowSentiment from "../components/Icons/ShowSentiment";
import { fetchSentimentAnalysis } from "../services/synthAIze.service";

// Sentiment files
import sad from "../../public/sad.json";
import happy from "../../public/happy.json";
import neutral from "../../public/neutral.json";
import { SENTIMENT_HAPPY, SENTIMENT_SAD } from "../utils";

const SentimentAnalysisPage = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const handleMutationSuccess = (data) => {
    if (data?.sentiment) {
      setSentiment(data?.sentiment);
    } else {
      setSentiment(
        "Couldn't analyze the given text, make sure the text is grammatically correct!"
      );
    }
  };

  const { trigger, isMutating, error } = useSWRMutation(
    "/api/sentiment-analysis",
    fetchSentimentAnalysis,
    {
      onSuccess: handleMutationSuccess,
    }
  );
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const processTextAnalysis = async () => {
    trigger({ text });
  };

  return (
    <section className="flex flex-col items-center mt-8 text-black">
      {error ? (
        <div className="flex flex-col justify-center">
          <div className="h-32 flex justify-center">
            <Error />
          </div>
          <h1 className="text-3xl text-center">Something went wrong.</h1>
          <ul className="mt-4 list-disc">
            Please make sure:
            <li>Text provided is comprehensible</li>
            <li>You have an strong internet connection</li>
            <li>Text language should be in English</li>
          </ul>
        </div>
      ) : isMutating ? (
        <section className="flex flex-col justify-center items-center">
          <Loader />
        </section>
      ) : (
        <div className="w-full">
          <textarea
            className="w-full h-40 p-4 bg-black text-white border border-white resize-none"
            placeholder="Enter your text here..."
            value={text}
            onChange={handleTextChange}
          />
          <div className="flex justify-center items-center mt-4">
            {isMutating ? (
              <div className="flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              <BasicButton onClick={processTextAnalysis} disabled={isMutating}>
                Analyse
              </BasicButton>
            )}
          </div>
          {!sentiment && (
            <div className="p-4 text-center text-2xl">
              <h1 className="pb-4">How does it work?</h1>
              <h4>
                Text sentiment analysis is a natural language processing
                technique used to determine the emotional tone conveyed in a
                piece of text, such as positive, negative, or neutral. It
                involves analyzing the words, phrases, and context to gauge the
                sentiment expressed. This analysis helps in understanding public
                opinion, customer feedback, and social media sentiment, enabling
                businesses to make informed decisions and tailor their responses
                accordingly.
              </h4>
            </div>
          )}
          {sentiment && (
            <div className="mt-8">
              <hr className="bg-black border p-1" />
              <div className="flex justify-center align-center">
                <ShowSentiment
                  animationData={
                    sentiment.toUpperCase() === SENTIMENT_HAPPY
                      ? happy
                      : sentiment.toUpperCase() === SENTIMENT_SAD
                      ? sad
                      : neutral
                  }
                />
              </div>
              <h1 className="text-center text-bold text-xl p-2">
                {sentiment.toUpperCase()}
              </h1>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default SentimentAnalysisPage;
