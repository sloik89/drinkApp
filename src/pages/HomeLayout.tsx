import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="wrapper">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
