import Image from "next/image";
import React from "react";
import white from "../images/1.png";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Header() {
  return (
    <div>
      <header className="flex justify-between items-center px-8  md:px-16  shadow-md">
        <div className="h-100 w-100 flex items-center cursor-pointer">
          <Link href="/">
            <Image
              src={white}
              width={124}
              height={124}
              objectFit="contain"
              className=""
            />
          </Link>
        </div>
        <div className="flex items-center justify-around ">
          <Link href="/">
            <p className=" font-semibold px-8 hidden md:inline-flex cursor-pointer">
              Home
            </p>
          </Link>
          {/* <SearchIcon className='md:hidden h-6 px-4 ml-8'/> */}
          <p className=" font-semibold px-8 mr-8 whitespace-nowrap hidden md:inline-flex">
            Find your Film
          </p>
          <p
            className=" text-xs px-4 md:text-base font-semibold md:px-8 bg-black text-white rounded-full py-2 hover:bg-white 
          hover:text-black hover:border-black hover:border hover:shadow-md cursor-pointer transition-all duration-300 ease"
          >
            Contact
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;
