"use client";
import { FC,useRef, useEffect } from "react";
/********* HELPERS & UTILS  **********/
import Lottie,{LottieRefCurrentProps} from "lottie-react";
import animationData from "../../public/atom-loader.json";
const CommingSoonPage : FC = () => {
  const animationRef = useRef<LottieRefCurrentProps>(null);
  useEffect(() => {
    const animation = animationRef.current;
    animation!.play();
    return () => {
      animation!.destroy();
    };
  }, []);
  return (
    <section className="flex flex-col items-center align-center text-black">
      <div className="w-64 h-64">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          lottieRef={animationRef}
        />
      </div>
      <h1 className="p-8 text-2xl">
        The service you are trying to access is currently undergoing development
        and is temporarily unavailable. We are working diligently to enhance and
        optimize the service to provide you with an exceptional user experience.
        Please check back soon as we are excited to bring you the full
        functionality and features of the service. Thank you for your patience
        and understanding.
      </h1>
    </section>
  );
};

export default CommingSoonPage;
