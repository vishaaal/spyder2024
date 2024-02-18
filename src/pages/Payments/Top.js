import React from "react";
import Left from "./Left";
import Right from "./Right";
import Bottom from "./Bottom";

const Top = () => {
  return (
    <div>
      <div className="flex">
        <Left />
        <Right />
      </div>
      <div></div>

      <Bottom />
    </div>
  );
};

export default Top;
