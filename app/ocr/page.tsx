"use client";
import { FC,useState } from "react";
/********* COMPONENTS **********/
import Loader from "../components/Loaders/Loader";
import BasicButton from "../components/Button/BasicButton";
/********* HELPERS & UTILS **********/
import Image from "next/image";
import { ImageLike, createWorker } from "tesseract.js";
import { useDropzone } from "react-dropzone";
import Error from "../components/Icons/Error";

const OCRPage : FC = () => {
  const [image, setImage] = useState<string | ImageLike |null>(null);
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const processImage = async () => {
    setIsLoading(true);
    try {
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
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles) => {
      const photoFiles = acceptedFiles.filter((file) =>
        file.type.startsWith("image/")
      );
      const nonPhotoFiles = acceptedFiles.filter(
        (file) => !file.type.startsWith("image/")
      );
      if (nonPhotoFiles.length > 0) {
        alert("Only photo files are allowed.");
        return;
      }
      return onDrop(photoFiles);
    },
  });

  return (
    <section className="text-black">
      {isError ? (
        <div className="flex flex-col justify-center">
          <div className="h-32 flex justify-center">
            <Error />
          </div>
          <h2 className="text-center p-4 text-xl">
            Something went wrong. Please try again later.
          </h2>
        </div>
      ) : isLoading ? (
        <section className="flex flex-col justify-center items-center">
          <Loader />
        </section>
      ) : (
        <>
          <div className="flex flex col items-center justify-center h-2/3 p-8">
            <div
              {...getRootProps()}
              className="text-center border-4 border-dashed border-black py-4 px-6 rounded-md cursor-pointer"
            >
              <input
                {...getInputProps({
                  accept: "image/jpeg, image/jpg, image/png",
                })}
              />
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
                <p>
                  Drag and drop an image file here, or click to select a file
                </p>
              )}
            </div>
          </div>
          {!image && (
            <div className="p-8 text-center text-2xl">
              <h1 className="pb-4">How does it work ?</h1>
              <h4>
                OCR &#40;Optical Character Recognition&#41; is a technology that
                allows computers to recognize and extract text from images or
                scanned documents. It works by analyzing the patterns and shapes
                of characters in the image and converting them into editable and
                searchable text. OCR is useful for tasks like digitizing printed
                documents, extracting data from forms, and enabling text
                recognition in applications such as image-to-text conversion or
                automated document processing. It simplifies the process of
                converting physical documents into digital formats, making it
                easier to work with and manipulate text-based content.
              </h4>
            </div>
          )}
          {image && (
            <>
              <div className="flex justify-center">
                <BasicButton onClick={processImage} disabled={isLoading}>
                  Process Image
                </BasicButton>
              </div>
              {text && (
                <div className="mt-8 text-xl">
                  <hr className="bg-black border p-1" />
                  <h2 className="p-4 lg:p-8">Text : </h2>
                  <p className="p-4 lg:p-8">{text}</p>
                </div>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
};

export default OCRPage;
