import React, { useState } from "react";
import { PickerOverlay } from "filestack-react";

const AddBlog = () => {
  const [isPicker, setIsPicker] = useState(false);
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogs = {
      title,
      content,
      //pass url from filestack to mongodb
      file: image.filesUploaded[0].url,
    };

    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify(blogs),
      headers: {
        "Content-Type": "application/json  ",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setContent("");
      setFile("");
      setError(null);
      console.log("new blog added", json);
    }
  };

  return (
    <form
      className="mx-auto w-full lg:w-[650px] grid border-dashed border-black-800 border-2 p-6 my-6"
      onSubmit={handleSubmit}
    >
      <h1 className="py-4 text-2xl text-center">Add a New Blog</h1>
      <label className="py-2 text-xl">Blog Title </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={
          emptyFields.includes("title")
            ? "error"
            : "rounded h-10 p-2 outline-[#E2B8AC]"
        }
      />
      <label className="py-2 text-xl">Content </label>
      <textarea
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className={
          emptyFields.includes("content")
            ? "error"
            : "rounded h-[150px] p-2 outline-[#E2B8AC]"
        }
      />

      {/* Add Image */}
      {image ? (
        <img
          src={image && image.filesUploaded[0].url}
          alt="imageUploaded"
          onChange={(e) => setFile(e.target.value)}
          value={file}
          className="w-[400px] h-[400px] object-cover mx-auto p-2"
        />
      ) : (
        <button
          type="button"
          onClick={() => (isPicker ? setIsPicker(false) : setIsPicker(true))}
          className="w-full text-lg border-dashed h-36 border-4 border-[#E2B8AC] mt-2"
        >
          Add Image
        </button>
      )}

      {/* submit button */}
      <button className="bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white  my-5 py-2 px-4 rounded-full hover:drop-shadow-md duration-500 hover:scale-105">
        Add Blog
      </button>
      {error && <div className="error">{error}</div>}

      {/* filestack */}
      <div className="mt-4 relative">
        {isPicker && (
          <PickerOverlay
            apikey={process.env.REACT_APP_FILESTACK_API_KEY}
            onSuccess={(res) => {
              setImage(res);
              setIsPicker(false);
            }}
            onError={(res) => alert(res)}
            pickerOptions={{
              maxFiles: 1,
              accept: ["image/*"],
              errorsTimeout: 2000,
              maxSize: 20 * 2048 * 2048,
            }}
          />
        )}
      </div>
    </form>
  );
};

export default AddBlog;
