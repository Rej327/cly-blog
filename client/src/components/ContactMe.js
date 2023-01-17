import React from "react";

const ContactMe = () => {
  return (
    <div className="max-w-[1100px] mx-auto my-28 grid grid-cols-3 justify-center">
      <div className="col-span-1">
        <h1 className="font-tenor text-2xl py-5 tracking-wider">My Address</h1>
        <p className="text-gray-600 pb-3 flex text-sm">
          88 West 21th Street, Suite 721 New York NY 10016
        </p>
        <p className="text-gray-600 pb-3 flex text-sm">+ 1235 2355 98</p>
        <p className="text-gray-600 pb-3 flex text-sm">My Facebook</p>
        <p className="text-gray-600 pb-3 flex text-sm">My twitter</p>
        <p className="text-gray-600 pb-3 flex text-sm">My instagram</p>
      </div>
      <div className="h-max w-max">
        <div className="grid grid-cols-2 gap-8">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="h-8 w-auto p-2 rounded-md"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            className="h-8 w-auto p-2 rounded-md"
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Message"
            required
            className="h-8 w-max p-2 rounded-md"
          />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContactMe;
