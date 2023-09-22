import { FC } from "react";
/********* COMPONENTS **********/
import BasicButton from "./components/Button/BasicButton";
/********* HELPERS & UTILS  **********/
import Error404 from "./components/Icons/Error404";
import Link from "next/link";
import { APP_NAME } from "./utils";

const NotFoundPage: FC = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <figure className="min-w-min w-24 h-24">
          <Error404 />
        </figure>
        <div className="container pt-8 mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-8">{APP_NAME}</h1>
          <p className="text-black text-lg mb-8">Page not found!</p>
          <Link href="/home">
            <BasicButton>Back to Home</BasicButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
