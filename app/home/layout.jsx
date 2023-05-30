import TopNavbar from "../components/Navigation/TopNavbar";
const HomeLayout=({
    children
})=>{
    return (
      <section>
        <TopNavbar />
        {children}
      </section>
    );
  }

export default HomeLayout;