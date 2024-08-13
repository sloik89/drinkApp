import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const value = "some data";
  return (
    <div>
      <Navbar />
      <section className="wrapper">
        {isLoading ? <Loading /> : <Outlet context={value} />}
      </section>
    </div>
  );
};

export default HomeLayout;
