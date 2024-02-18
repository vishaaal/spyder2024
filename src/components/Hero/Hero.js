import React from "react";
import Videoimg from "../../assets/video1.png"
import Waves from "../../assets/waves.png"
import Shells from "../../assets/shells.png"
import smartFinder from "../../assets/smartFinder.png"
import artVenue  from "../../assets/artvenue.png"


const Hero = () => {
  return (
    <div className="flex p-6 m-2 justify-between">
      <div className="basis-3/5"> 
        <div className="text-7xl font-bold py-3">Team projects,<br/> done well</div>
        <div className="text-3xl text-slate-500 py-3">
          The only platform that gives all your team all the tools needed to
          work together on their awesome projects
        </div>
        <div className="flex py-3">
          <div></div>
          <div><button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign Up Free
          </button></div>
        </div>
        <div className="flex bg-slate-200 w-8/12 rounded py-3">
            <div className="p-3"><img src={Shells}/></div>
            <div className="p-3"><img src={smartFinder}/></div>
            <div className="p-3"><img src={artVenue} /></div>
            <div className="p-3"><img src={Waves} /></div>
        </div>
      </div>
      <div className="basis-2/5"><img src={Videoimg} /></div>
    </div>
  );
};

export default Hero;
