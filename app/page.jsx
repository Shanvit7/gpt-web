"use client";
/********* COMPONENTS **********/
import BasicButton from "./components/Button/BasicButton";
import Lottie from "lottie-react";
/********* HELPERS & UTILS  **********/
import { useRef, useEffect } from "react";
import Link from "next/link";
import { APP_NAME } from "./utils";
import animationData from "../public/file-searching.json";

const LandingPage = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const animation = animationRef.current;
    animation.play();
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-64 h-64">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>
        <div className="container pt-8 mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-8">{APP_NAME}</h1>
          <p className="text-black text-lg mb-8">
            Empowering Text Understanding with AI
          </p>
          <BasicButton>
            <Link href="/home">Get started</Link>
          </BasicButton>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
