import React from "react";
import circleimg from "../../assets/circleofnetworks.png";

const Hero3 = () => {
  return (
    <div className="flex p-6 m-2">
      <div className="basis-3/5">
        <div className="text-7xl font-bold py-3 py-3">
          Get all the tools your
          <br /> team needs
        </div>
        <div className="text-xl text-slate-500 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </div>
        <div className="text-sky-600 font-medium py-3"> Check the tools <i class='bx bx-right-arrow-alt'></i></div>
      </div>
      <div className="basis-2/5"><img src={circleimg} /></div> 
    </div>
  );
};

export default Hero3;
