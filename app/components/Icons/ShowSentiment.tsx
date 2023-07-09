"use client";
import { FC,useRef, useEffect } from "react";
/********* UTILS **********/
import Lottie,{LottieRefCurrentProps} from "lottie-react";
/********* INTERFACE **********/
import { ShowSentimentProps } from "../../utils/interfaces";
const ShowSentiment : FC <ShowSentimentProps> = ({ animationData }) => {
  const animationRef = useRef<LottieRefCurrentProps>(null);
  useEffect(() => {
    const animation = animationRef.current;
    animation!.play();
    return () => {
      animation!.destroy();
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
