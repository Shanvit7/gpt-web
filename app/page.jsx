/********* COMPONENTS **********/
import BasicButton from "./components/Button/BasicButton";
/********* HELPERS **********/
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-8">College GPT</h1>
          <p className="text-black text-lg mb-8">Hectic lives made easier</p>
          <BasicButton>
            <Link href="/home">
              Get started
            </Link>
          </BasicButton>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
