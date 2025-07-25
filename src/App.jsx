import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { RouterProvider, createBrowserRouter, Route, Router, Routes } from 'react-router-dom'
import "./App.css";
import { createRoot } from 'react-dom/client'


// import SharedLayoutAnimation from "./components/Animatednav";
// import LandingSection from "./components/Landingsection";
import ProjectsPage from "./pages/ProjectsPage";
import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
        path: "",
        element: <LandingPage />,

      },
      {
        path: "/projects",
        element: <ProjectsPage />
      }]
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}


// export default function App() {
//   const x = useMotionValue(0.5);
//   const y = useMotionValue(0.5);

//   const background = useTransform(
//     [x, y],
//     ([a, b]) =>
//       `conic-gradient(from 0deg at ${a * 100}% ${b * 100}%, #0d1117, #0cdcf7, #ff0088, #fff312, #0d1117)`
//       // `conic-gradient(from 0deg at ${a * 100}% ${b * 100}%, #0a0a0a,#4b1037,#2c0f41,#3d3205,#0a1e3d,#0a0a0a)`
//   );

//   // listen on the entire window
//   useEffect(() => {
//     const handle = (e) => {
//       x.set(e.clientX / window.innerWidth);
//       y.set(e.clientY / window.innerHeight);
//     };
//     window.addEventListener("pointermove", handle);
//     return () => window.removeEventListener("pointermove", handle);
//   }, [x, y]);


//   return (
//     <main className="relative text-white overflow-x-hidden w-screen">
//       <LandingSection />

//       {/* Background Gradient Layer */}
//       <motion.div
//         className="fixed inset-0 -z-10 pointer-events-none"
//         style={{ background }}
//       />

//       {/* Animated Content Section */}
//       <section className="min-h-screen flex items-center justify-center w-full">
//         <SharedLayoutAnimation />
//       </section>
//     </main>
//   );

// }






