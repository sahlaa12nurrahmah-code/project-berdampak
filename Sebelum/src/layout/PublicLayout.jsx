import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function PublicLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // 🔥 GLOBAL PROGRESS STATE
  const [completed, setCompleted] = useState({
    preTest: true,
    p1_m1: true,
    p1_m2: true,
    p1_submission: false, // ⬅️ INI KUNCI PERTEMUAN 2
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />

      <div className="pt-16">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          completed={completed}   // 🔥 PASS KE SIDEBAR
        />

        <main className="min-h-screen p-6 sm:ml-72">
          <Outlet context={{ completed, setCompleted }} /> {/* 🔥 */}
        </main>
      </div>
    </div>
  );
}
