/********* COMPONENTS **********/
import TopNavbar from "../components/Navigation/TopNavbar";
import BackButton from "../components/Button/BackButton";

const AboutLayout=({
    children
})=>{
  const pageTitle = "About"
    return (
      <section className="w-screen h-screen overflow-x-hidden">
        <TopNavbar pageTitle={pageTitle} />
        <div className="flex items-center text-black">
          <BackButton />
          <h1 className="hidden font-bold lg:block mt-2">{pageTitle}</h1>
        </div>
        {children}
      </section>
    );
  }

export default AboutLayout;