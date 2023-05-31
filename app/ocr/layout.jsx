import TopNavbar from "../components/Navigation/TopNavbar";
const OCRLayout=({
    children
})=>{
    return (
      <section className="w-screen h-screen">
        <TopNavbar pageTitle="Optical Character Recognition" />
        {children}
      </section>
    );
  }

export default OCRLayout;