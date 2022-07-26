import Image from "next/image";
import React from "react";
import white from "../images/1.png";
import Empty from "../images/Empty.svg";

function Info({ films }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center md:text-left md:flex md:flex-row pb-16 md:pb-0">
        <div>
          <div className=" rounded-md">
            <Image
              src={ films.Poster == 'N/A' ? Empty: films.Poster}
              width={400}
              height={400}
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        </div>
        <div className=" pl-8 w-[70%]">
          <h2 className="mt-8 text-3xl">{films.Title}</h2>
          <div className="md:flex  md:space-x-4 mt-4">
            <h3><b>Type:</b> {films.Type}</h3>
            <h3><b>Genre:</b> {films.Genre}</h3>
            <h3><b>Ratings:</b> {films.imdbRating}</h3>
            <h3><b>Votes:</b> {films.imdbVotes}</h3>
          </div>
          <div className=" space-y-2 mt-4">
            <h3><b>Released:</b> {films.Released}</h3>
            <h3><b>Director:</b> {films.Director}</h3>
            <h3><b>Actors:</b> {films.Actors}</h3>
          </div>
          <p className="mt-4"><b>Plot:</b> {films.Plot}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
