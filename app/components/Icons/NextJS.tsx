"use client";
import {FC,useRef,useEffect} from 'react';
/********* UTILS **********/
import Lottie,{LottieRefCurrentProps} from "lottie-react";
import animationData from "../../../public/nextjs.json";
const NextJS : FC = () => {
  const animationRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const animation = animationRef.current;
    animation!.play();
    return () => {
      animation!.destroy();
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
