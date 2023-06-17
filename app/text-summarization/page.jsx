"use client";
/********* UTILS  **********/
import { useState } from "react";
import useSWRMutation from "swr/mutation";
/********* COMPONENTS **********/
import BasicButton from "../components/Button/BasicButton";
import Loader from "../components/Loaders/Loader";
import Error from "../components/Icons/Error";
/********* SERVICES **********/
import { fetchTextSummarization } from "../services/synthAIze.service";

const TextSummarizationPage = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [summaryPercent, setSummaryPercent] = useState(10);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSummaryPercentChange = (e) => {
    setSummaryPercent(parseInt(e.target.value));
  };
  const handleMutationSuccess = async (data) => {
    if (data.summary) {
      setSummary(data?.summary);
    } else {
      setSummary("Something went wrong. Please try again later!");
    }
  };

  const { trigger, isMutating, error } = useSWRMutation(
    "/api/text-summarize",
    fetchTextSummarization,
    {
      onSuccess: handleMutationSuccess,
    }
  );

  const processTextSummarization = async () => {
    if (summaryPercent < 5) {
      alert("Summary percent can't be less than 5%");
      setSummaryPercent(5);
      return;
    }
    trigger({ text, summaryPercent });
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
            <BasicButton
              onClick={processTextSummarization}
              disabled={isMutating}
            >
              Summarize
            </BasicButton>
          </div>
          {!summary && (
            <div className="p-4 text-center text-2xl">
              <h1 className="pb-4">How does it work ?</h1>
              <h4>
                Text summarization works by using algorithms and techniques to
                analyze a given text and extract its most important information.
                It involves identifying key sentences, phrases, or concepts and
                condensing them into a shorter summary. This can be achieved
                through extractive methods that select and arrange existing
                content, or through abstractive methods that generate new
                sentences based on the understanding of the original text. The
                goal is to provide a concise and meaningful summary that
                captures the essence of the source material.
              </h4>
            </div>
          )}
          {summary && (
            <div className="mt-8 text-xl">
              <hr className="bg-black border p-1" />
              <h2 className="p-4 lg:p-8">Summary:</h2>
              <p className="p-4 lg:p-8">{summary}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default TextSummarizationPage;
