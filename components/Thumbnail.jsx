import Image from "next/image";
import React from "react";
import Empty from "../images/Empty.svg";

function Thumbnail({ Poster, id, info, Title, Year }) {
  return (
    <div className="m-4 ">
      <div onClick={info}
      id={id}
      
        className="group m-4 relative h-80 w-60  transition-all
          duration-300 ease cursor-pointer bg-transparent 
         after:bg-black after:opacity-60
        after:absolute after:left-0 after:w-full after:h-full after:hidden  
         after:rounded-lg after:hover:inline after:transition-all after:duration-500 after:ease after:bg-rounded-lg  "
      >
        <Image
          src={Poster == "N/A" ? Empty : Poster}
          layout="fill"
          objectFit="cover"
          className="rounded-lg p-4  group-hover:blur-sm group-hover:scale-110 transition-all duration-500 ease  "
          onClick={info}
          id={id}
        />
        <div
          className="absolute bottom-1/2  w-full text-center px-2 font-semibold opacity-0 
        group-hover:inline group-hover:translate-y-1/2 group-hover:opacity-100 transition-all duration-500 ease z-10"
        >
          <p className=" text-white mb-2 text-lg">{Title}</p>
          <p className=" text-white font-bold">{Year}</p>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
