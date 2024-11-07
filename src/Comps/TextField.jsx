import React from "react";
import Input from "./Input";

const TextField = () => {
  return (
   <>
    <div className="flex">
        <div className="container px-10 m-auto h-[7vh] flex">
        <div className="m-auto mt-7">
            Get productive! <br/> <span>Fix your Attention Span and Achieve your goals!</span> 
            <Input/>
        </div>
        </div>
      </div>
   </>
  );
};

export default TextField;
