import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What we Do" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center mt-10">
          We are PHEONIX team from University of Moratuwa.
        </h1>
        <p className="text-center text-lg mt-4">
          Join with PHEONIX to shape the world
        </p>
      </div>

      <div id="myDiv" className="flex justify-center mt-8">
        <a
          href="https://docs.google.com/forms/d/1pGWIpwzGru9a508gmzeRArRulS3okyA2JTPEKaNJ47k/edit?pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-designColor text-white rounded-lg shadow-lg hover:bg-designColor transition duration-300"
        >
          Join with us
        </a>
      </div>
    </section>
  );
};

export default Features;
