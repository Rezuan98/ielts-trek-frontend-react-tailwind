import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PreNavbar from "../components/PreNavbar";

const MasterLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PreNavbar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MasterLayout;
