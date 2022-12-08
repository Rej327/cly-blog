import React from "react";
import { VscAdd } from "react-icons/vsc";

const AddBlog = () => {
  return (
    <div className="max-full h-screen bg-[#E2B8AC]/50 flex justify-center">
      <div className="m-auto bg-white text-center w-96 h-auto inline-block rounded-md p-4">
        <h1 className="pb-4 font-tenor tracking-wider text-2xl">ADD BLOG</h1>
        <form className="grid">
          <label className="pb-2">TITLE</label>
          <input
            className="inline-block p-2 bg-slate-50 rounded-md outline-[#E2B8AC]"
            type="text"
            placeholder="Enter you title here..."
            required
          />
          <label className="p-4">CONTENT</label>
          <textarea
            className="inline-block h-28 p-2 bg-slate-50 rounded-md outline-[#E2B8AC]"
            type="text"
            placeholder="Enter you blog here..."
            required
          />

          <input type="file" className="py-3" />
        </form>
        <VscAdd className="h-10 p-2 mx-auto cursor-pointer mt-2 w-10 bg-[#E2B8AC] rounded-md hover:text-white hover:scale-105 hover:shadow-md duration-300" />
      </div>
    </div>
  );
};

export default AddBlog;
