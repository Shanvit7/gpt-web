import { FC } from 'react';
/********* COMPONENTS **********/
import TopNavbar from "../components/Navigation/TopNavbar";
/********* INTERFACES **********/
import { PageLayoutProps } from "../utils/interfaces";

const HomeLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <section className="w-screen h-screen overflow-x-hidden">
      <TopNavbar pageTitle="Home" />
      {children}
    </section>
  );
};

export default HomeLayout;
