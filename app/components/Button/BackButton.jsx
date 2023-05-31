"use client"
import Back from "../Icons/Back";
import { useRouter } from "next/navigation";
const BackButton=()=>{
    const router = useRouter();
    const handleBack=()=>{
        router.back();
    }
    return(
        <button onClick={handleBack} className="text-black w-8 h-8 lg:w-14 lg:h-14 mt-2 hover:text-gray-600 focus:outline-none focus:text-black">
             <Back />
        </button>
    );
};

export default BackButton;