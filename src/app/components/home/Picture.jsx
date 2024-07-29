"use client";

import Image from "next/image";
import picture from "../../../../public/home.jpg";
import logo from "../../../../public/R.jpg";
import ContainerCards from "./ContainerCards";
import Slider from "react-slick";

export default function Picture() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center scrollbar-hide">
        <div className="w-full relative h-[600px] flex justify-start items-center flex-col">
          <div className="absolute"></div>
          <Slider
            {...settings}
            className="w-full overflow-hidden  h-[600px] absolute"
          >
            <div>
              <Image src={picture} className=" object-contain" />
            </div>
            <div>
              <Image src={picture} className=" object-contain" />
            </div>
            <div>
              <Image src={picture} className=" object-contain" />
            </div>
            <div>
              <Image src={picture} className=" object-contain" />
            </div>
          </Slider>
          {/* <Image src={picture} className="w-screen h-[600px] object-cover" /> */}
          <Image src={logo} className="w-nav-w top-[20px]  absolute " />

          <div className="text-white shadow-2xll mb-20 w-full absolute font-extrabold text-[5rem] leading-[5rem] text-center drop-shadow-[0_2.5px_2.5px_rgba(0,0,0)]"></div>
          <div className="text-base w-fit absolute mb-[25.4rem] font-semibold shadow-2xl px-2 py-1 bg-primary text-white">
            Real Estate Agent
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="absolute w-[77%] self-center  border-b-2 border-primary"></div>
          <h2 className="mt-20 text-4xl font-semibold">ULTIME ACQUISIZIONI</h2>
          <div className="absolute w-[47%] self-center mt-44  border-b-2 border-primary"></div>
        </div>
        <ContainerCards />
      </div>
    </>
  );
}
