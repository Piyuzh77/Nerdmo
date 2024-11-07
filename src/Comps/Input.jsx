import React, { useEffect, useState } from "react";
import Timer from "./Timer";

const Input = () => {
  const [input, setinput] = useState("");

  const handleInputChange = (event) => {
    setinput(event.target.value);
  };

  return (
    <>
      <div className="flex">
        <div className="m-auto flex flex-col">
          <input
            type="text"
            name={input}
            onChange={handleInputChange}
            className="border border-black w-[80%] rounded-xl placeholder:px-3 my-4 h-[35px]"
            placeholder="Enter the Distracting Site 🦉"
          />
          <Timer input={input} />
        </div>
      </div>
    </>
  );
};

export default Input;
