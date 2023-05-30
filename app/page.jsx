import Head from "next/head";
import BasicButton from "./components/Button/BasicButton";

const LandingPage = () => {
  return (
    <div>
      <Head>
        <title>College GPT</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.4/dist/tailwind.min.css"
        />
      </Head>
      <div className="bg-white min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-8">
            College GPT
          </h1>
          <p className="text-black text-lg mb-8">
           Hectic lives made easier
          </p>
          <BasicButton text={'Get Started'} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
