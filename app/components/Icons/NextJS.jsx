"use client";
import Lottie from "lottie-react";
import { useRef, useEffect } from "react";
import animationData from '../../../public/nextjs.json';
const NextJS = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const animation = animationRef.current;
    animation.play();
    return () => {
      animation.destroy();
    };
  }, []);
  return (
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        lottieRef={animationRef}
      />
  );
};

export default NextJS;
