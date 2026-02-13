import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">
        <Navbar />
        <div className="px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
