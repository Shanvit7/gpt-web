"use client"
/********* COMPONENTS **********/
import BasicButton from "./components/Button/BasicButton";
/********* HELPERS **********/
import {useRef,useEffect} from "react";
import Link from "next/link";
import { APP_NAME } from "./utils";
import lottie from "lottie-web";
import animationData from "../public/astronot.json";

const LandingPage = () => {
  const animationContainerRef = useRef(null);
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []);
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
       <div className="w-64 h-64" ref={animationContainerRef} />
        <div className="container pt-8 mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-8">{APP_NAME}</h1>
          <p className="text-black text-lg mb-8">Empowering Text Understanding with AI</p>
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
