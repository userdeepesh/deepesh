// "  pt-1 " is used to uperside in wep
// " font-['Founders_Grotesk'] " it is Font
// " text-[7.5vw] " it is used to make text size
// " mt-32 " it provide a margin top
// " npm install react-icons --save " for icon
// " import { FaArrowUpLong } from "react-icons/fa6"; " for icon

import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (<div className="mr-[1vw] rounded-md w-[9vw] h-[5vw] bg-red-500"></div>)}
              <h1 className="uppercase text-[7.5vw] leading-[5.5vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-medium">
                {item}
              </h1>

              </div>
              
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800  bg-zinc-900 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "Form the first pitch to the lat pitch to IPO"
        ].map((item, index) => (<p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
         <div className="start flex items-center gap-5  ">
           <div className="px-5 py-2 border-[2px] flex items-center justify-center font-light text-md uppercase  border-zinc-400 rounded-full">
            <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
            <FaArrowUpLong/>
            </span>
            
          
            </div>
            Start the project
           </div>
         </div>

      </div>
    </div>
  );
}
export default LandingPage;
