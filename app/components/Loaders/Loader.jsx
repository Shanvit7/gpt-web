"use client";
/********* HELPERS **********/
import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/loader.json";

const Loader = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const animation = animationRef.current;
    animation.play();
    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <div className="w-32 h-32">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        lottieRef={animationRef}
      />
    </div>
  );
};

export default Loader;
