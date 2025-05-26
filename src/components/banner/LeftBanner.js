import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Reach Beyond Limits!",
      "Unlock Your Potential!",
      "Join us in this adventure!",
    ],
    loop: true,
    typeSpeed: 30,  
    deleteSpeed: 20,   
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-4 sm:gap-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Welcome to{" "}
          <span className="text-designColor capitalize">Project Phoenix</span>
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className="text-sm sm:text-base font-bodyFont leading-6 tracking-wide text-white">
          Project Phoenix is a collaboration between the Electronic Club and
          SEDS Mora of the University of Moratuwa. This project involves
          developing a Cube Satellite in two progressive stages. First, we
          intend to launch a High Altitude balloon integrated with a payload to
          obtain initial knowledge with High Altitude sensor readings, and to
          test communication capabilities. The second stage will involve the
          development of the Cube Satellite.
        </p>
      </div>

      <div className="flex flex-col items-center ">
        <p className="text-center text-lg ">
          Join with PHOENIX to shape the world
        </p>
        <a
          href="https://forms.gle/wFWKefrnEqvUogbP7"
          target="_blank"
          rel="noopener noreferrer"
          className="w-36 text-center px-6 py-3 bg-designColor text-white rounded-lg shadow-lg hover:bg-designColor transition duration-300 mt-4"
        >
          Join with us
        </a>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
