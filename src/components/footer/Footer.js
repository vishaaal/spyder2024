import React from "react";

const Footer = () => {
  return (
    <div className="flex p-6 m-2">
      <div className="flex basis-3/5">
        <div className="px-3">magnifico</div>
        <div className="px-3 text-slate-500">© 2023 All rights reserved</div>
      </div>

      <div className="flex text-slate-500  basis-2/5">
        <div className="px-3">Terms</div>
        <div className="px-3">Privacy</div>
        <div className="px-3">Support </div>
        <div className="px-3"> About</div>
        <div className="px-3">Resources</div>
        <div className="px-3">Contact</div>
      </div>
    </div>
  );
};

export default Footer;
