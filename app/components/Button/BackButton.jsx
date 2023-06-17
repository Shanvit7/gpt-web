"use client";
/********* HELPERS  **********/
import { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/back.json";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const animationRef = useRef(null);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.stop();
    }
  };

  return (
    <button
      onClick={handleBack}
      className="text-black mt-2 hover:text-gray-600 focus:outline-none focus:text-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-14 h-14 lg:w-20 lg:h-20">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={false}
          lottieRef={animationRef}
        />
      </div>
    </button>
  );
};

export default BackButton;
