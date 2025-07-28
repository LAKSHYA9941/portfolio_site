import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";


export default function Layout() {
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const gradient = useTransform(
        [x, y],
        ([a, b]) =>
            `conic-gradient(from 0deg at ${a * 100}% ${b * 100}%, #0d1117, #0d1117, #070F2B, #27374D, #521477 ,#000000, #060930, #400082)`
    );

    useEffect(() => {
        const handle = (e) => {
            x.set(e.clientX / window.innerWidth);
            y.set(e.clientY / window.innerHeight);
        };
        window.addEventListener("pointermove", handle);
        return () => window.removeEventListener("pointermove", handle);
    }, [x, y]);



    return (
        <div className="h-screen flex flex-col overflow-hidden ">
            <Navbar />
            <motion.div
                className="fixed inset-0 -z-10 min-h-full"
                style={{ background: gradient }}
                pointerEvents="none"
            />
            <main className="flex-1 overflow-y-auto scrollbar-hide backdrop-blur-lg">
                <Outlet />
            </main>
        </div>
    );
}