/********* COMPONENTS **********/
import OCR from "../components/Icons/OCR";
import TextSummary from "../components/Icons/TextSummary";
import SentimentAnalysis from "../components/Icons/SentimentAnalysis";
import TextMining from "../components/Icons/TextMining";
/********* HELPERS **********/
import Link from "next/link";

const HomePage = async () => {
  return (
    <div className="container mx-auto p-4  mt-4 lg:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 text-black gap-4">
        <Link href={"/ocr"}>
          <div className="box bg-white border border-black rounded-lg p-4 flex flex-col justify-center items-center">
            <figure className="min-w-min w-24 h-24 mt-2">
              <OCR />
            </figure>
            <h2 className="text-lg font-bold mt-8">
              Optical Character Recognition
            </h2>
            <p className="font-medium">&#40;Image to Text&#41;</p>
          </div>
        </Link>

        <Link href={"/text-summarization"}>
          <div className="box bg-white border border-black rounded-lg p-4 flex flex-col justify-center items-center">
            <figure className="min-w-min w-24 h-24 mt-2">
              <TextSummary />
            </figure>
            <h2 className="text-lg font-bold mt-8">Text Summarization</h2>
            <p className="font-medium">&#40;Condense Text to Key Points&#41;</p>
          </div>
        </Link>

        <Link href={"/text-mining"}>
          <div className="box bg-white border border-black rounded-lg p-4 flex flex-col justify-center items-center">
            <figure className="min-w-min w-24 h-24 mt-8">
              <TextMining />
            </figure>
            <h2 className="text-lg font-bold mt-2">Text Mining</h2>
            <p className="font-medium">
              &#40;Extracting text from diffrent files&#41;
            </p>
          </div>
        </Link>

        <Link href={"/sentiment-analysis"}>
          <div className="box bg-white border border-black rounded-lg p-4 flex flex-col justify-center items-center">
            <figure className="min-w-min w-24 h-24 mt-6">
              <SentimentAnalysis />
            </figure>
            <h2 className="text-lg font-bold mt-2">Sentiment Analysis</h2>
            <p className="font-medium">&#40;Find emotion expressed in a piece of text&#41;</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
