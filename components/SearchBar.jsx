import { SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

import React, { useState } from "react";

const SearchBar = ({animation}) => {
  
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [effect, setEffect] = useState(false);

  const search = (e) => {
    e.preventDefault();
    if (!searchInput) return;

    router.push({
      pathname: "/search",
      query: {
        searcInput: searchInput ,
      },  
    });
    setSearchInput("");
  };

  return (
    <div
      className="border border-gray-500 rounded-full md:w-full max-w-xl shadow-md z-10 mt-8"
      onClick={animation}
    >
      <form className="flex justify-between items-center">
        <input
          type="text"
          className=" px-5 py-2 outline-none flex-grow bg-transparent placeholder:text-gray-400 "
          placeholder={router.query.searcInput || "Start your search..."}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon
          className="h-8 p-2  mr-1 text-white bg-black rounded-full hover:scale-110"
          onClick={animation || search }
          onAnimationEnd={() => setEffect(false)}
        />
        <button onClick={search} hidden type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
