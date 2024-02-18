import React from "react";
import img1 from "../../assets/pic1.png";
import img2 from "../../assets/pic2.png";
import img3 from "../../assets/pic3.png";

const Hero2 = () => {
  return (
    <div className="flex p-6 m-2 border-2 border-yellow-300">
      <div className="flex basis-1/2">
        <div className="p-3">
          <img src={img1} />
        </div>
        <div className="p-3">
          <img src={img2} />
        </div>
        <div className="p-3">
          <img src={img3} />
        </div>
      </div>
      <div className="basis-1/2">
        <div className="text-7xl font-bold py-3">
          Enjoy your time
          <br /> working
        </div>
        <div className="text-xl text-slate-500 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </div>
        <div className="text-sky-600 font-medium"> See how it helped others <i class='bx bx-right-arrow-alt'></i></div>
      </div>
    </div>
  );
};

export default Hero2;
