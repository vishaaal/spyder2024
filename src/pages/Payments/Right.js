import React from "react";
import mountain from "../../assets/mountain.jpeg";

const Right = () => {
  return (
    <div className="m-2 p-6 rounded-lg border-2">
      <div className="rounded-lg py-4">
        {" "}
        <img className="h-36 w-72 rounded-lg" src={mountain} />
      </div>
      <div className="py-4">4.9 4.5 category</div>
      <div className="py-4 font-semibold">
        {" "}
        Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef
      </div>
      <div className="py-4 font-semibold">
        <div>ticket type - variant</div>
        <div>day month date</div>
        <div>time</div>
        <div>5 guests</div>
      </div>
      <div className="py-4">View payment summary</div>
      <div>
        <div className="flex justify-between">
          <div className="font-semibold">Total Payable</div>
          <div className="font-semibold">$XXX</div>
        </div>
        <div className="text-green-600 bg-green-200 w-1/3 rounded-lg">You saved price</div>
        <div className="py-4">You will be charged in AED</div>
        <div className="py-7">By clicking “confirm & pay”, you agree to Tickete’s general terms and conditions and cancellation policy.</div>
        <div className="py-4"><button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Confirm & Pay
          </button></div>
      </div>
    </div>
  );
};

export default Right;
