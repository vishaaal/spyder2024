import React from "react";
import './Left.css'


const Left = () => {
  return (
    <div className="m-8">
      <div className="text-6xl font-bold py-3 mb-4">Confirm & Pay</div>
      <div className="p-6 border-2 rounded-lg mb-4">
        <div className="font-bold">Free Cancellation</div>
        <div className="text-slate-500">
          Tickets can be cancelled by 13th December, 2022
        </div>
      </div>

      <div className="my-8">
        <div className="text-2xl font-semibold py-2">Enter your details</div>
        <div className="pt-4 text-slate-500">
          We'll be sending your ticekts to the details below. Booking for a
          friend? Add their details
        </div>
        <div >
          <form action="/user_login.js"  />
          <input type="text" placeholder="First Name" class="email" required />
          <br />
          <div className="yoo">
            <input
              type="text1"
              placeholder="Country Code"
              class="email"
              required
            />
            <br />
            <input
              type="text1"
              placeholder="Phone Number"
              class="email"
              required
            />
            <br />
          </div>
          <div className="yoo" >
            <input type="text1" placeholder="Email" class="email" required />
            <br />
            <input
              type="text1"
              placeholder="Confirm email"
              class="Confirm email"
            />
            <br />
          </div>

          <br />
        </div>
      </div>
      <div>
        <div className="text-2xl font-semibold py-2">
          Additional information
        </div>
        <div className="pt-4 text-slate-500">
          We need a few more details to complete your reservation
        </div>
        <div>
          <form action="/info.js" />
          <div className="yoo">
            <input
              type="text1"
              placeholder="Input Label"
              class="label"
              required
            />
            <br />
            <input type="text1" placeholder="Select" class="Select" required />
            <br />
          </div>
          <input
            type="text"
            placeholder="MultiSelect"
            class="MultiSelect"
            required
          />
          <br />

          <br />
        </div>
      </div>
      <div>
        <div className="text-2xl font-semibold py-2">
          Select your mode of payment
        </div>
        <div className="pt-4 text-slate-500">
          Payments with Tickets are secure and encrpyted
        </div>
        <div></div>
      </div>
      <div>
        <div>Coming soon </div>
        <div> Coming soon</div>
      </div>
      <div>
        <div className="text-2xl font-semibold py-2">Total Payable: $XXX</div>
        <div className="p-6 border-2 rounded-lg mb-4">
          <div className="font-semibold">You will be charged in AED</div>
          <div className="text-slate-500">
            The price shown here is in US Dollar USD as per the current
            conversion rate. You will be charged in Arab Emirates Dirham AED
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
