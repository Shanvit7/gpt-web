"use client";
import Lottie from "lottie-react";
import { useRef, useEffect } from "react";
const ShowSentiment = ({ animationData }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    const animation = animationRef.current;
    animation.play();
    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <figure className="w-24 h-24">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        lottieRef={animationRef}
      />
    </figure>
  );
};

export default ShowSentiment;
