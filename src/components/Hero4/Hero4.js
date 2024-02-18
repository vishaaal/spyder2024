import React from "react";
import video2 from "../../assets/video2.png";

const Hero4 = () => {
  return (
    <div className="flex p-6 m-2">
      <div className="basis-1/2">
        <div className="text-6xl font-bold py-3 py-3">Improve workflow</div>
        <div>
          <table className="border-collapse border">
            <tr>
              <th className="bg-slate-300 p-5 w-7 border ">Research</th>
              <th className="p-5 w-7 border">Plan</th>
              <th className=" p-5 w-7 border">Design</th>
            </tr>
          </table>
        </div>
        <div className="text-xl text-slate-500 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className="text-sky-600 font-medium py-3">
          {" "}
          Check the tools <i class="bx bx-right-arrow-alt"></i>
        </div>
      </div>
      <div className="basis-1/2">
        <img src={video2} />
      </div>
    </div>
  );
};

export default Hero4;
