"use client";
/********* UTILS  **********/
import { useState } from "react";
import { useDropzone } from "react-dropzone";
/********* COMPONENTS **********/
import BasicButton from "../components/Button/BasicButton";
import Loader from "../components/Loaders/Loader";

const TextMiningPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");

  const handleExtraction = async (file) => {
    setIsLoading(true);
    const dataObj = new FormData();
    dataObj.append("input_file", file);
    dataObj.append("language", "english");
    const data = await fetch(
      "http://localhost:3000/api/extract-text-from-file",
      {
        method: "POST",
        body: dataObj,
      }
    );
    const response = await data.json();
    if (response?.text) {
      setIsLoading(false);
      return setText(response?.text);
    } else {
      setIsLoading(false);
      return setText("Something went wrong. Please try again later");
    }
  };

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(true);
    handleExtraction(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop,
  });

  const onReset = () => {
    setSelectedFile(null);
  };
  return (
    <section className="text-black">
      {!selectedFile ? (
        <>
          <div className="flex flex col items-center justify-center h-2/3 p-8">
            <div
              {...getRootProps()}
              className="text-center border-4 border-dashed border-black py-4 px-6 rounded-md cursor-pointer"
            >
              <input {...getInputProps()} />
              <p>Drag and drop a file here, or click to select a file</p>
            </div>
          </div>
          <div className="p-8 text-center">
            <h1 className="pb-4">How does it work?</h1>
            <h4>
              Text mining, also known as text analytics or natural language
              processing &#40;NLP&#41;, is a technology that enables computers to
              extract meaningful information and insights from unstructured text
              data. By employing techniques such as information retrieval,
              machine learning, and linguistic analysis, text mining facilitates
              tasks like sentiment analysis, topic modeling, named entity
              recognition, and document classification. It has diverse
              applications, including customer feedback analysis, market
              research, fraud detection, and content recommendation systems.
              Text mining empowers organizations to unlock valuable knowledge
              from vast amounts of textual information, leading to enhanced
              decision-making and improved understanding of human-generated
              content.
            </h4>
          </div>
        </>
      ) : isLoading ? (
        <div className="flex items-center justify-center">
            <Loader />
        </div>
      ) : (
        <>
          <h2 className="text-center p-4">{text}</h2>
          <div className="flex justify-center p-4">
            <BasicButton onClick={onReset}>Try Again</BasicButton>
          </div>
        </>
      )}
    </section>
  );
};

export default TextMiningPage;
