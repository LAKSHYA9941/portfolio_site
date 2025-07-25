import React from "react";
import Heroimg from "../assets/removebghero.png"
import herowithbg from "../assets/herowithbg.png"
import Stars from "./Stars";
import { NavLink, Link } from 'react-router-dom'


const LandingSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6  overflow-x-hidden  ">
            <Stars />
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Content */}
                <div className="text-center md:text-left space-y-6">

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-600 to-yellow-300">Lakshya</span> <span className="inline-block animate-wave">👋</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300">
                        I’m a full-stack developer<br />
                        specializing in building exceptional digital experiences.
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 pt-4">
                        <NavLink
                        to={"/projects"}
                        >
                            <button
                                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition duration-300"
                            >

                                Explore

                            </button>
                        </NavLink>
                        <button className="px-6 py-3 rounded-full border border-purple-300 text-white font-semibold hover:bg-purple-600 hover:border-transparent transition duration-300">
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="absolute right-0 top-0 h-screen w-full max-w-md md:max-w-lg flex items-center justify-center   md:static md:h-auto md:justify-end">
                    <img
                        // src= {Heroimg}
                        src={herowithbg}

                        alt="Lakshya Developer Illustration"
                        className="mask-radial-[100%_100%] mask-radial-from-45% mask-radial-to-50%  mask-radial-at-center w-[80%] md:w-full h-auto object-contain drop-shadow-[0_0_50px_#2c0f41]"
                    />
                </div>
            </div>
        </section >
    );
};

export default LandingSection;

