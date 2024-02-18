import React from "react";

const Bottom = () => {
  return (
    <div className="flex m-8">
        


      <div className="basis-1/3">
        <div className="text-2xl font-semibold py-2">
          Frequently asked questions
        </div>
        <div className="pt-4 text-slate-500">
          Here are some of our most asked questions.
        </div>
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
         </div>
         </div>
        <div className="basis-2/3 p-6">
          <div className="p-5 font-semibold border-2 rounded-lg my-3">What should I do on my first trip to Rome?</div>
          <div className="p-5 border-2 rounded-lg my-3 ">
            <div className="font-semibold">What are some hidden gems to see in Rome</div>
            <div>
              Rome is packed with hidden gems. If you love art, don't miss the
              Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco
              is a free museum and well worth a quick visit. If you love the
              ancient stuff, don't miss the Domus Romana at Palazzo Valentini,
              the Domus Aurea, and the Baths of Caracalla. For even more hidden
              gems, take a tour of Trastevere, a fascinating neighborhood full
              of history and ambiance.
            </div>
          </div >
          <div className="p-5 font-semibold border-2 rounded-lg my-3">How much time should I spend in Rome?</div>
          <div className="p-5 font-semibold border-2 rounded-lg my-3">What food is Rome known for?</div>
          <div className="p-5 font-semibold border-2 rounded-lg my-3" >What is the best way to get around Rome?</div>
        </div>
      </div>
  );
};

export default Bottom;
