import Image from "next/image";
import React from "react";
import white from "../images/2.png";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="flex flex-col justify-center items-center px-8  md:px-16  shadow-md bg-black">
        <div className="h-100 w-100  cursor-pointer  ">
          <Link href="/">
            <Image
              src={white}
              width={124}
              height={124}
              objectFit="contain"
              className=" "
            />
          </Link>
        </div>
        <div className="pb-4">
          <p className=" text-white "> Jundula © Copyright 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
