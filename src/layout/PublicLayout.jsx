import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function PublicLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <Navbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />

      {/* WRAPPER */}
      <div className="pt-16">
        {/* SIDEBAR */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* MAIN CONTENT */}
        <main
          className={`min-h-screen p-6 transition-all duration-300
          sm:ml-72`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}