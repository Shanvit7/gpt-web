/********* COMPONENTS **********/
import OCR from "../components/Icons/OCR";
import TextSummary from "../components/Icons/TextSummary";
/********* HELPERS **********/
import Link from "next/link";

const HomePage = async () => {
  return (
    <div className="container mx-auto p-4  mt-4 lg:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 text-black gap-4">
        <Link href={'/ocr'}>
        <div className="box bg-white border border-black rounded-lg p-4 flex flex-col justify-center items-center">
          <figure className="min-w-min w-24 h-24 mt-2">
            <OCR/> 
          </figure>
          <h2 className="text-lg font-bold mt-8">Optical Character Recognition</h2>
          <p className="font-medium">&#40;Image to Text&#41;</p>
        </div>
        </Link>

        <Link href={'/text-summarization'}>
        <div className="box bg-white border border-black rounded-lg p-4 flex flex-col justify-center items-center">
        <figure className="min-w-min w-24 h-24 mt-2">
            <TextSummary /> 
          </figure>
          <h2 className="text-lg font-bold mt-8">Text Summarization</h2>
          <p className="font-medium">&#40;Condense Text to Key Points&#41;</p>
        </div>
        </Link>
        <div className="box bg-white border border-black rounded-lg p-4 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold">Coming Soon ...</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
