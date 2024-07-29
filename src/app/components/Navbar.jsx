"use client";

import Link from "next/link";
import { useState } from "react";
import phone from "../../../public/phone.png";
import email from "../../../public/email.png";
import house from "../../../public/house.png";
import foot from "../../../public/foot.png";
import id from "../../../public/id.png";
import toscano from "../../../public/R.jpg";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContact = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="scrollbar-hide w-full z-10 shadow-2xl sticky top-0 h-nav-w flex justify-between items-center bg-white/30 backdrop-blur-2xl">
      <div className="w-full flex items-center justify-between">
        <div className="w-[200px] p-4">
          <Image src={toscano} className="" />
        </div>
        <div className="relative grid grid-cols-5 justify-start items-center text-center px-4 text-primary font-semibold pr-10">
          <Link href="/" className="px-2 w-[130px] bg-primary py-1 text-white">
            HOME
          </Link>
          <Link href="/about" className="px-2">
            ABOUT
          </Link>
          <Link href="/services" className="px-2">
            SERVICES
          </Link>
          <Link href="/products" className="px-2">
            HOUSES
          </Link>
          <button onClick={toggleContact} className="px-2">
            CONTACTS
          </button>
        </div>
      </div>
      <div
        className={`font-extrabold text-[13px] px-6 gap-6 absolute w-full flex bg-white/90 h-[30px] backdrop-blur-3xl -bottom-[30px] justify-end items-center ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center gap-2">
          <Image src={foot} className="w-[15px] h-[15px]" />
          <p>Niccolo' Guglielmino</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={house} className="w-[15px] h-[15px]" />
          <p>Via dei trans 44</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={phone} className="w-[14px] h-[14px[" /> <p>0412345678</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={email} className="w-[15px] h-[15px] mt-1" />{" "}
          <p>piedidimiriana@mlml.com</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={id} className="w-[15px] h-[15px]" />
          <p>P.IVA 666999666</p>
        </div>
      </div>
    </nav>
  );
}
