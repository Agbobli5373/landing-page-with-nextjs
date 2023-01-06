import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import {FaYoutube,FaFacebook,FaTwitter,FaWhatsapp} from 'react-icons/fa';

export default function header() {
  const [nav, setNav] = useState(false);
  const [bgcolor, setBgColor] = useState<string>("transparent");
  const [textColor, setTextColor] = useState<string>("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBgColor("#ffffff");
        setTextColor("#000000");
      } else {
        setBgColor("transparent");
        setTextColor("#ffffff");
      }
    };

    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <nav
      style={{ backgroundColor: `${bgcolor}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 py-5 flex flex-row justify-between px-5  items-center bg-gray-100 shadow"
    >
      <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
        AI
      </h1>

      <div className="hidden md:flex  justify-center gap-3 px-5">
        <ul style={{ color: `${textColor}` }} className="hidden md:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/#portfolio">My Places</Link>
          </li>
          <li className="p-4">
          <div className="flex gap-6">
           <Link passHref href={"/"}><FaFacebook color={textColor}/></Link>
           <Link passHref  href={"/"}><FaTwitter color={textColor}/> </Link>
           <Link passHref  href={"/"}><FaYoutube color={textColor}/> </Link>
           <Link passHref  href={"/"}><FaWhatsapp color={textColor}/> </Link>
           </div>
          </li>
        </ul>
      </div>

      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? (
          <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
        ) : (
          <AiOutlineAlignRight size={20} style={{ color: `${textColor}` }} />
        )}
      </div>
      <div
        className={
          nav
            ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
        }
      >
        <ul>
          <li
            onClick={handleNav}
            className="p-4 text-4xl text-white hover:text-gray-500"
          >
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl  text-white hover:text-gray-500"
          >
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl text-white hover:text-gray-500"
          >
            <Link href="/#portfolio">My Places</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
