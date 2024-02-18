import React from "react";
import background from "../../assets/hotairballons.jpeg";

const ImgSec = () => {
  return (
    <div className="m-14 rounded-lg w-5/6 h-80 flex " style={{backgroundImage: `url(${background})`}}>
      <div className="basis-2/3"></div>
      <div className="basis-1/3">
        <div className="text-4xl font-bold py-3 py-3">
          Problems come and
          <br /> get solved with ease
        </div>
        <div className="text-lg text-slate-500 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className=" font-medium py-3">
          {" "}
          improve workflow <i class="bx bx-right-arrow-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default ImgSec;
