/********* COMPONENTS **********/
import TopNavbar from "../components/Navigation/TopNavbar";

const OCRLayout=({
    children
})=>{
    return (
      <section className="w-screen h-screen">
        <TopNavbar pageTitle="Image to Text" />
        {children}
      </section>
    );
  }

export default OCRLayout;