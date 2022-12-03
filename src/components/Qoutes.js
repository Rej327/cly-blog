import React, { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";

const Qoutes = () => {
  const [qoutes, setQoute] = useState([]);
  const [getQoutes, setGetQoutes] = useState(false);

  const fetchQoutes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const randoNumber = Math.round(Math.random() * data.length);
    console.log(randoNumber);
    setQoute(data[randoNumber]);
  };

  const handleClick = () => {
    setGetQoutes(!getQoutes);
  };

  console.log("text: ", qoutes.text, "\n", "author: ", qoutes.author);

  useEffect(() => {
    fetchQoutes();
  }, [getQoutes]);

  return (
    <div>
      <div className="w-[20rem] mx-auto mt-5 rounded-md bg-gray-300 p-5">
        <h1 className="font-tenor text-2xl">
          " {qoutes.text ? qoutes.text : "Getting Qoutes..."} "
        </h1>
        <div className="flex justify-between">
          <p className="text-[12px] text-stone-400 tracking-widest my-5">
            -{qoutes.author ? qoutes.author : "Jefferson R."}
          </p>
          <button onClick={handleClick}>
            <AiOutlineReload className="text-2xl text-teal-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Qoutes;
