import React from "react";
import nerdmo from "../assets/nerdmoji.png"


const Header = () => {
  return (
    <>
      <div className="flex">
        <div className="container px-3 m-auto min-w-full border-b-2 border-black shadow-lg flex flex-col">
            <img src={nerdmo} className="m-auto h-14 w-14"/>
            <h1 className="m-auto font-bold mb-2">Nerdmo!</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
