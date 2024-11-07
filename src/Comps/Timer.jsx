import { PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const Timer = ({ input }) => {
  const [hrs, setHrs] = useState("");
  const [mins, setMins] = useState("");
  const [sec, setSec] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const handleHrs = (event) => {
    const numericVal = event.target.value;
    if (/^\d*$/.test(numericVal) && numericVal >= 0 && numericVal <= 23) {
      setHrs(numericVal);
    } else {
      setHrs("");
    }
  };

  const handleMins = (event) => {
    const numericVal = event.target.value;
    if (/^\d*$/.test(numericVal) && numericVal >= 0 && numericVal <= 59) {
      setMins(numericVal);
    } else {
      setMins("");
    }
  };

  const handleSec = (event) => {
    const numericVal = event.target.value;
    if (/^\d*$/.test(numericVal) && numericVal >= 0 && numericVal <= 59) {
      setSec(numericVal);
    } else {
      setSec("");
    }
  };

  const handlePlus = () => {
    const totalTime = Number(hrs) * 3600 + Number(mins) * 60 + Number(sec);
    if (totalTime > 0) {
      setTimeLeft(totalTime);
    }

  };

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      console.log("Time's up!");
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center max-w-[80%]">
        <div className="flex max-w-fit items-center">
          <input
            type="text"
            value={hrs}
            onChange={handleHrs}
            className="border border-black w-1/6 h-[40px] rounded-lg placeholder:pl-3"
            placeholder="HH"
          />
          <h1 className="font-extrabold px-2">:</h1>
          <input
            type="text"
            value={mins}
            onChange={handleMins}
            className="border border-black w-1/6 h-[40px] rounded-lg placeholder:pl-2"
            placeholder="MM"
          />
          <h1 className="font-extrabold px-2">:</h1>
          <input
            type="text"
            value={sec}
            onChange={handleSec}
            className="border border-black w-1/6 h-[40px] rounded-lg placeholder:pl-3"
            placeholder="SS"
          />
          <div className="mx-auto h-10 w-px bg-black"></div>
          <button
            className="border w-1/6 border-black p-2 rounded-lg transition-all mx-auto flex hover:bg-orange-900 hover:text-yellow-200"
            onClick={handlePlus}
          >
            <PlusIcon className="m-auto "  />
          </button>
        </div>
      </div>
      <button className="w-[80%] border border-black mt-5 rounded-full h-12 hover:text-yellow-200 hover:bg-orange-900 hover:border-none transition-all">
        ⚡ focus!!
      </button>
    </div>
  );
};

export default Timer;
