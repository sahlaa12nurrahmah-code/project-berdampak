import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Check, Lock, Menu, X } from "lucide-react";

const Sidebar = ({ isOpen, onToggle, completed, setCompleted }) => {
  const [expanded, setExpanded] = useState({
    preTest: true,
    pertemuan1: true,
    pertemuan2: false,
  });

  const toggle = (key) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const locked = (deps = []) =>
    !deps.every((d) => completed?.[d]);

  const markDone = (key, deps = []) => {
    if (deps.every((d) => completed?.[d])) {
      setCompleted((prev) => ({ ...prev, [key]: true }));
    }
  };

  const itemBase =
    "flex items-center gap-3 p-2 rounded-lg text-sm transition";

  return (
    <>
      {/* MOBILE TOGGLE */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-20 left-4 z-50 bg-white p-2 rounded-lg shadow"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <aside
        className={`fixed top-16 left-0 w-80 h-[calc(100vh-4rem)] bg-white border-r
        transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-8">
          <h2 className="text-xl font-bold mb-4">Course Menu</h2>

          {/* PRE TEST */}
          <div className="mb-2">
            <button
              onClick={() => toggle("preTest")}
              className="w-full flex justify-between p-3 bg-pink-50 rounded-lg"
            >
              <span>Pre Test</span>
              {expanded.preTest ? <ChevronUp /> : <ChevronDown />}
            </button>

            {expanded.preTest && (
              <div className="ml-4 mt-2">
                <div className={`${itemBase} bg-green-50 text-green-600`}>
                  <Check size={18} />
                  <span>Pre Test</span>
                </div>
              </div>
            )}
          </div>

          {/* PERTEMUAN 1 */}
          <div className="mb-2">
            <button
              onClick={() => toggle("pertemuan1")}
              className="w-full flex justify-between p-3 bg-pink-50 rounded-lg"
            >
              <span>Pertemuan 1</span>
              {expanded.pertemuan1 ? <ChevronUp /> : <ChevronDown />}
            </button>

            {expanded.pertemuan1 && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/materi/pertemuan-1/materi-1"
                  onClick={() => markDone("p1_m1", ["preTest"])}
                  className={`${itemBase} ${
                    locked(["preTest"])
                      ? "opacity-50 pointer-events-none text-gray-400"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {locked(["preTest"]) ? <Lock size={18} /> : <Check size={18} />}
                  <span>Materi 1</span>
                </Link>

                <Link
                  to="/materi/pertemuan-1/materi-2"
                  onClick={() => markDone("p1_m2", ["p1_m1"])}
                  className={`${itemBase} ${
                    locked(["p1_m1"])
                      ? "opacity-50 pointer-events-none text-gray-400"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {locked(["p1_m1"]) ? <Lock size={18} /> : <Check size={18} />}
                  <span>Materi 2</span>
                </Link>

                <Link
                  to="/submission/pertemuan-1"
                  className={`${itemBase} ${
                    locked(["p1_m2"])
                      ? "opacity-50 pointer-events-none text-gray-400"
                      : "bg-orange-50 text-orange-600 hover:bg-orange-100"
                  }`}
                >
                  {locked(["p1_m2"]) ? <Lock size={18} /> : <Check size={18} />}
                  <span>Submission Pertemuan 1</span>
                </Link>
              </div>
            )}
          </div>

          {/* PERTEMUAN 2 */}
          <div className="mb-2">
            <button
              onClick={() => toggle("pertemuan2")}
              className={`w-full flex justify-between p-3 rounded-lg ${
                locked(["p1_submission"])
                  ? "bg-gray-100 text-gray-400"
                  : "bg-pink-50"
              }`}
            >
              <span>Pertemuan 2</span>
              {expanded.pertemuan2 ? <ChevronUp /> : <ChevronDown />}
            </button>

            {!locked(["p1_submission"]) && expanded.pertemuan2 && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/materi/pertemuan-2/materi-1"
                  className={`${itemBase} hover:bg-gray-100`}
                >
                  <Check size={18} />
                  <span>Materi 1</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          onClick={onToggle}
          className="lg:hidden fixed inset-0 bg-black/50 z-30 top-16"
        />
      )}
    </>
  );
};

export default Sidebar;
