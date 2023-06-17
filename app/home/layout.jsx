/********* COMPONENTS **********/
import TopNavbar from "../components/Navigation/TopNavbar";

const HomeLayout = ({ children }) => {
  return (
    <section className="w-screen h-screen">
      <TopNavbar pageTitle="Home" />
      {children}
    </section>
  );
};

export default HomeLayout;
