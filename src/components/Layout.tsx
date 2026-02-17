import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 px-6 md:px-10">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;

