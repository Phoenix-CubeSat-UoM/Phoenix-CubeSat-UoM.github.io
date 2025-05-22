import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center">
      <div className="bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex justify-center items-center">
        <img
          className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] rounded-2xl"
          src={bannerImg}
          alt="bannerImg"
        />
      </div>
    </div>
  );
};

export default RightBanner;
