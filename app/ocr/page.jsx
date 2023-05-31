"use client";
import { useState } from "react";
import Image from "next/image";
import { createWorker } from "tesseract.js";
import { useDropzone } from "react-dropzone";
import BasicButton from "../components/Button/BasicButton";

const OCRPage = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const processImage = async () => {
    setIsLoading(true);

    const worker = await createWorker();
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(image);
    setText(text);
    await worker.terminate();

    setIsLoading(false);
  };

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop,
  });

  return (
    <section className="text-black">
      <div className="flex flex col items-center justify-center h-2/3 p-8">
        <div
          {...getRootProps()}
          className="text-center border-4 border-dashed border-black py-4 px-6 rounded-md cursor-pointer"
        >
          <input {...getInputProps()} />
          {image ? (
            <figure className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-112 lg:h-112 relative">
              <Image
                fill
                quality={100}
                className="w-32 h-32 mb-4"
                src={image}
                alt="Uploaded"
              />
            </figure>
          ) : (
            <p>Drag and drop an image file here, or click to select a file</p>
          )}
        </div>
      </div>
      {!image &&
          <div className="p-8 text-center">
            <h1 className="pb-4">How does it work ?</h1>
            <h4>
            OCR &#40;Optical Character Recognition&#41; is a technology that allows computers to recognize and extract text from images or scanned documents. It works by analyzing the patterns and shapes of characters in the image and converting them into editable and searchable text. OCR is useful for tasks like digitizing printed documents, extracting data from forms, and enabling text recognition in applications such as image-to-text conversion or automated document processing. It simplifies the process of converting physical documents into digital formats, making it easier to work with and manipulate text-based content.
            </h4>
          </div>}
      {image && (
        <>
          <div className="flex justify-center">
            <BasicButton onClick={processImage} disabled={isLoading}>
              {isLoading ? "Processing..." : "Process Image"}
            </BasicButton>
          </div>
          {text && (
            <div className="mt-8">
              <hr className="bg-black border p-1" />
              <h2 className="p-4">Text : </h2>
              <p className="p-4">{text}</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default OCRPage;
