import React from "react";

const AddBlog = () => {
  return (
    <div className="max-full h-screen bg-[#E2B8AC]/50 flex justify-center">
      <div className="m-auto bg-white text-center w-96 h-96 inline-block rounded-md p-4">
        <h1 className="pb-4">Add Blog</h1>
        <form className="grid">
          <label className="font-tenor">TITLE</label>
          <input className="inline-block" type="text" required />
          <label>CONTENT</label>
          <textarea required />
        </form>
        <button>Add</button>
      </div>
    </div>
  );
};

export default AddBlog;
