import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
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
    <form className="create" onSubmit={handleSubmit}>
      {image ? (
        <img
          src={image && image.filesUploaded[0].url}
          alt="imageUploaded"
          onChange={(e) => setFile(e.target.value)}
          value={file}
          className="w-[400px] h-[400px] object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={() => (isPicker ? setIsPicker(false) : setIsPicker(true))}
          className="w-full text-lg font-bold border-dashed h-56 border-4 border-blue-800 text-blue-800"
        >
          Add Image
        </button>
      )}

      <h3>Add a New Workout</h3>
      <label>Blog Title </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />
      <label>Content </label>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className={emptyFields.includes("content") ? "error" : ""}
      />

      {/* submit button */}
      <button>Add Blog</button>
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
              maxSize: 1 * 900 * 1000,
            }}
          />
        )}
      </div>
    </form>
  );
};

export default AddBlog;
