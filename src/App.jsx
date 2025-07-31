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
          path:"/app/contacts",
          element:<Contacts />
        },
        {
          path: "/app/projects",
          element: <Projects />
        },
        {
          path: "/app/about",
          element: <About />
        },
        {
          path: "/app/techstack",
          element: <Techstack />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}