import React, { useState } from "react";
// import { useBlogsContext } from "../hooks/useWorkoutsContext";
import { VscAdd } from "react-icons/vsc";

// const AddBlog = () => {
//   const [head, setHead] = useState("");
//   const [content, setContent] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const blogs = { head, date, content, img };

//     fetch("http://localhost:3000/", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(blogs),
//     }).then(() => {
//       console.log("New Blog Added");
//     });
//   };

//   return (
//     <div className="max-full h-screen bg-[#E2B8AC]/50 flex justify-center">
//       <div className="m-auto bg-white text-center w-96 h-auto inline-block rounded-md p-4">
//         <h1 className="pb-4 font-tenor tracking-wider text-2xl text-[#E2B8AC]">
//           ADD BLOG
//         </h1>
//         <form className="grid" onSubmit={handleSubmit}>
//           <label className="pb-2">TITLE</label>
//           <input
//             className="inline-block p-2 bg-slate-50 rounded-md outline-[#E2B8AC]"
//             type="text"
//             placeholder="Enter you title here..."
//             value={head}
//             onChange={(e) => setHead(e.target.value)}
//             required
//           />
//           <label className="p-4">CONTENT</label>
//           <textarea
//             className="inline-block h-28 p-2 bg-slate-50 rounded-md outline-[#E2B8AC]"
//             type="text"
//             placeholder="Enter you blog here..."
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           />
//         </form>
//         <VscAdd
//           onClick={handleSubmit}
//           className="h-10 p-2 mx-auto cursor-pointer mt-2 w-10 bg-[#E2B8AC] rounded-md hover:text-white hover:scale-105 hover:shadow-md duration-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default AddBlog;

const AddBlog = () => {
  // const { dispatch } = useBlogsContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmpryFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogs = { title, content };

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
      setEmpryFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setContent("");
      setError(null);
      console.log("new blog added", json);
      // dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
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
      <button>Add Blog</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddBlog;
