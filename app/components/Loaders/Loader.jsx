"use client";
/********* HELPERS **********/
import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/satellite.json";

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
    <div className="w-52 h-52">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        lottieRef={animationRef}
      />
          <h3 className="text-center text-black text-2xl p-4">Loading...</h3>
    </div>
  );
};

export default Loader;
