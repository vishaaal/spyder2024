import React from "react";

const Bottom = () => {
  return (
    <div className="flex m-8">
      <div>
        <div className="text-2xl font-semibold py-2">
          Frequently asked questions
        </div>
        <div className="pt-4 text-slate-500">Here are some of our most asked questions.</div>
        <div>
          <div className="mt-4 bg-slate-200 rounded-lg p-4 ">
            <div className="text-xl font-semibold py-2">
              Still need help? <br />
              We're here for you.
            </div>
            <div>
              <button
                type="button"
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Chat with us
              </button>
            </div>
          </div>
          <div>
            <div>What should I do on my first trip to Rome?</div>
            <div>What are some hidden gems to see in Rome</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Bottom;
