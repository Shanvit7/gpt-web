"use client"
import {useRef,useEffect} from "react";
import animationData from "../../../public/back.json";
import { useRouter } from "next/navigation";
import lottie from "lottie-web";

const BackButton = () => {
    const animationContainerRef = useRef(null);
    const router = useRouter();
  
    const handleBack = () => {
      router.back();
    };
  
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: animationData,
      });
  
      return () => {
        anim.destroy();
      };
    }, []);
  
    return (
      <button
        onClick={handleBack}
        className="text-black mt-2 hover:text-gray-600 focus:outline-none focus:text-black"
        onMouseEnter={() => {
          lottie.play();
        }}
        onMouseLeave={() => {
          lottie.pause();
        }}
      >
        <div className="w-14 h-14 lg:w-20 lg:h-20" ref={animationContainerRef} />
      </button>
    );
  };

export default BackButton;