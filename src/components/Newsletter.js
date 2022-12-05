import React from "react";

const Newsletter = () => {
  return (
    <div className="w-auto">
      <div>
        <h1 className="font-tenor text-xl py-5 tracking-wider">NEWSLETTER</h1>
        <p className="text-gray-600">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia
        </p>
      </div>
      <div>
        <div className="py-3 w-full">
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            className="w-full h-11 text-center rounded-md outline-[#E2B8AC]"
          />
        </div>
        <button className="bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white py-2 px-4 rounded-full hover:drop-shadow-md duration-500 hover:scale-105 w-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
