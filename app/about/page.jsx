/******** ICONS,HELPERS & UTILS **********/
import NextJS from "../components/Icons/NextJS";
import GithubAnimate from "../components/Icons/GithubAnimate";
import Link from "next/link";
import { GITHUB_LINK, APP_NAME } from "../utils";

const AboutPage = () => {
  return (
    <section className="bg-white text-black p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-6">About {APP_NAME}</h1>
      <p className="text-lg mb-6">
        {APP_NAME} is a web application that offers a variety of AI-based text
        services. Powered by cloud functions & RapidAPI, it combines
        cutting-edge artificial intelligence with user-friendly features to
        deliver advanced text processing capabilities.
      </p>
      <p className="text-lg mb-6">
        Whether you need to convert images to text, perform language
        translation, conduct sentiment analysis, or leverage any other AI-driven
        text service, {APP_NAME} has got you covered. Our platform harnesses the
        power of machine learning models to provide accurate and efficient
        results for your text-related tasks.
      </p>
      <p className="text-lg mb-6">
        With {APP_NAME}, you can save valuable time and resources by automating
        repetitive text processing tasks. Our intuitive interface makes it
        effortless to access and utilize powerful AI capabilities without the
        need for complex setups or extensive coding knowledge.
      </p>
      <p className="text-lg mb-6">
        Experience the magic of text processing with {APP_NAME} and unlock the
        full potential of AI-driven solutions for your personal or business
        needs.
      </p>
      <p className="text-lg mb-6">
        **This is project is still work in progress & is built on Next JS 13
        &#40;Unstable&#41;. Apologizing for any difficulties you might face
        during the usage while working to provide you with a better experience.
      </p>
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <h3 className="text-xl font-bold mb-4">Built on:</h3>
        <div className="flex justify-center items-center">
          <figure className="w-40 h-40">
            <NextJS />
          </figure>
        </div>
        <h3 className="text-xl font-bold mb-4">View source code on:</h3>
        <div className="flex justify-center items-center">
          <Link href={GITHUB_LINK}>
            <figure className="w-40 h-40">
              <GithubAnimate />
            </figure>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
