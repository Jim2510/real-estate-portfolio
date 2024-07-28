import Image from "next/image";
import picture from "../../../public/home.jpg";
import logo from "../../../public/R.jpg";
import ContainerCards from "./home/ContainerCards";

export default function Picture() {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="relative h-[500px] flex justify-center items-center flex-col">
          <div className="absolute"></div>
          <Image src={picture} className="w-screen h-[500px] object-cover" />
          <Image src={logo} className="w-nav-w top-[20px]  absolute " />
          <div className="text-white shadow-2xll mb-20 w-full absolute font-extrabold text-[5rem] leading-[5rem] text-center drop-shadow-[0_2.5px_2.5px_rgba(0,0,0)]"></div>
          <div className="text-2xl font-quicksand w-fit absolute mt-48 font-extrabold shadow-2xl px-2 py-1 bg-white">
            Real Estate Agent
          </div>
        </div>
        <ContainerCards />
      </div>
    </>
  );
}
