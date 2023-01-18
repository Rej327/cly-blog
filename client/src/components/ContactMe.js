import React from "react";

const ContactMe = () => {
  return (
    <div className="max-w-[1100px] mx-auto my-28 flex justify-center">
      <div className="max-w-[320px]">
        <h1 className="font-tenor text-2xl py-5 tracking-wider">My Address</h1>
        <p className="text-gray-600 pb-3 flex text-sm">
          88 West 21th Street, Suite 721 New York NY 10016
        </p>
        <p className="text-gray-600 pb-3 flex text-sm">+ 1235 2355 98</p>
        <p className="text-gray-600 pb-3 flex text-sm">My Facebook</p>
        <p className="text-gray-600 pb-3 flex text-sm">My twitter</p>
        <p className="text-gray-600 pb-3 flex text-sm">My instagram</p>
      </div>
      <div className="h-auto w-auto ml-5 ">
        <div className="flex gap-8 w-max ">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="h-8 w-[300px] p-2 rounded-md"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            className="h-8 w-[300px] p-2 rounded-md"
          />
        </div>
        <div className="h-auto w-full  mt-2">
          <textarea
            type="text"
            placeholder="Message"
            required
            className="h-32 p-2 rounded-md w-full"
          />
        </div>
        <button className="bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white mt-2 py-2 px-4 rounded-full hover:drop-shadow-md duration-500 w-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
