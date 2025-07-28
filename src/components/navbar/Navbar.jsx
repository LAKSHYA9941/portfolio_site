// import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
// import logo from '../../assets/LOGO.png'

// function Navbar() {
//   return (
//     <header className="shadow sticky z-50 top-0 backdrop-blur-sm bg-black/5">
//       <nav className=" px-4 lg:px-6 py-2">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl drop-shadow-[0_0_20px_#fff]">
//           <Link to="/" className="flex items-center">
//             <img
//               src={logo}
//               className="mr-3 h-10 w-50"
//               alt="Logo"
//             />
//           </Link>
//           <ul className="flex flex-row space-x-4">
//             <li>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-500 font-bold'
//                     : 'text-gray-700 hover:text-blue-500'
//                 }>
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/techstack"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-500 font-bold'
//                     : 'text-gray-700 hover:text-blue-500'
//                 }>
//                 Tech Stack
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/projects"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-500 font-bold'
//                     : 'text-gray-700 hover:text-blue-500'
//                 }>
//                 Projects
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar



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
              className="mr-3 h-10 w-auto drop-shadow-[0_0_6px_#B13BFF]"
              alt="Logo"
            />
          </Link>

          {/* Links */}
          <ul className="flex flex-row space-x-6">
            {["about", "techstack", "projects"].map((path) => (
              <li key={path}>
                <NavLink
                  to={`/${path}`}
                  className={({ isActive }) =>
                    `relative px-1 py-1 text-sm font-medium tracking-wide uppercase
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-[#ff0088] drop-shadow-[0_0_4px_#ff0088]"
                        : "text-gray-300 hover:text-[#B13BFF] hover:drop-shadow-[0_0_4px_#B13BFF]"
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