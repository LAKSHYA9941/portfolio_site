import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/40 border-b border-[#0d1117]/60">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-12 w-auto rounded-lg border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-1 shadow-[0_4px_12px_#00000040,0_0_15px_#ffffff40] backdrop-blur-sm"
              // className="mr-3 h-10 w-auto drop-shadow-[0_0_10px_#ffffff] "
              alt="Logo"
            />
          </Link>

          {/* Links */}
          <ul className="flex flex-row space-x-6 ">
            {["about", "techstack", "projects"].map((path) => (
              <li key={path}>
                <NavLink
                  to={`/app/${path}`}
                  className={({ isActive }) =>
                    `relative px-2 py-1.5 text-sm font-medium tracking-wide uppercase
     transition-all duration-300 rounded-2xl
     ${isActive
                      ? "text-white drop-shadow-[0_0_8px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#8c8c8c] focus:ring-offset-2"
                      : "text-slate-500 hover:text-white hover:drop-shadow-[0_0_8px_#B13BFF] focus:outline-none"
                    }`
                  }
                >
                  {path === "techstack" ? "Tech Stack" : path}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;