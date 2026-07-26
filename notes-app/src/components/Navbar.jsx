import { FaStickyNote } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaStickyNote className="text-white text-3xl" />

          <div>
            <h1 className="text-white text-2xl font-bold">
              Smart Notes
            </h1>

            <p className="text-white text-sm opacity-80">
              Organize your ideas efficiently
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => {
              document
                .getElementById("add-note")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            New Note
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="bg-white text-xl px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;