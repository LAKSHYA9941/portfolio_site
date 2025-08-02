import { useEffect } from "react";
import { RouterProvider, createBrowserRouter, Route, Router, Routes } from 'react-router-dom'
import "./App.css";
import { createRoot } from 'react-dom/client'
import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";
import Projects from "./components/Projects";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Contacts from "./pages/Contacts";
import PageReveal from "./components/Pagereveal";



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/app",
      element: <Layout />,
      children: [
        {
          path: "/app/contacts",
          element: <PageReveal><Contacts /></PageReveal>
        },
        {
          path: "/app/projects",
          element: <PageReveal> <Projects /></PageReveal>
        },
        {
          path: "/app/about",
          element: <PageReveal><About /></PageReveal>
        },
        {
          path: "/app/techstack",
          element: <PageReveal> <Techstack /></PageReveal>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}




// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import PageReveal from './components/Pagereveal';   // <-- new
// import LandingPage from './pages/LandingPage';
// import Layout from './Layout';
// import Projects from './components/Projects';
// import About from './components/About';
// import Techstack from './components/Techstack';
// import Contacts from './pages/Contacts';
// import './App.css';

// export default function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <PageReveal><LandingPage /></PageReveal>,
//     },
//     {
//       path: '/app',
//       element: <Layout />,
//       children: [
//         { path: '/app/contacts',  element: <PageReveal><Contacts /></PageReveal> },
//         { path: '/app/projects',  element: <PageReveal><Projects /></PageReveal> },
//         { path: '/app/about',     element: <PageReveal><About /></PageReveal> },
//         { path: '/app/techstack', element: <PageReveal><Techstack /></PageReveal> },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }