import React from "react";
import herowithbg from "../assets/herowithbg.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LandingSection = () => (
  <section className="min-h-full flex flex-col md:flex-row items-center justify-center px-6 py-6">
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:justify-between gap-10">
      {/* 1️⃣  Text always on top */}
      <div className="text-center md:text-left space-y-6 z-10">
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-white">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-slate-50 drop-shadow-[0_0_8px_#fff]">
            Lakshya
          </span>{" "}
          <span className="inline-block animate-wave">👋</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-50">
          I’m a full-stack developer
          <br />
          specializing in building exceptional digital experiences.
        </p>

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <NavLink to="/contacts">
            <StyledWrapper>
              <div className="container">
                <button className="button">Contact Me</button>
              </div>
            </StyledWrapper>
          </NavLink>
        </div>
      </div>

      {/* 2️⃣  Image always below on mobile, beside on desktop */}
      <div className="relative w-full md:w-auto min-h-full flex justify-center md:justify-end">
        <img
          src={herowithbg}
          alt="Lakshya Developer Illustration"
          className="mask-radial-[100%_100%] mask-radial-from-45% mask-radial-to-50% mask-radial-at-center
            w-auto max-w-xs sm:max-w-sm md:max-w-md
            h-80 sm:h-96 md:h-[28rem]"
        />
      </div>
    </div>
  </section>
);

export default LandingSection;

/* unchanged styled button */
const StyledWrapper = styled.div`
  button {
    font-size: 1.4em;
    padding: 0.6em 0.8em;
    border-radius: 0.5em;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 2px 3px #000000b4;
  }
  .container {
    position: relative;
    padding: 3px;
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    border-radius: 0.9em;
    transition: all 0.4s ease;
  }
  .container::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 0.9em;
    z-index: -10;
    filter: blur(0);
    transition: filter 0.4s ease;
  }
  .container:hover::before {
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    filter: blur(1.2em);
  }
  .container:active::before {
    filter: blur(0.2em);
  }
`;