import Image from "next/image";
import c1 from "../../../../public/c1.jpg";
import c2 from "../../../../public/c2.jpg";
import c3 from "../../../../public/c3.jpg";
import Link from "next/link";

export default function Card() {
  return (
    <>
      <div className="p-4 hover:scale-110 transition-all ease-in-out h-fit rounded-2xl shadow-2xl flex flex-col justify-startitems-center mx-auto">
        <Link
          href="https://www.toscano.it/"
          className="w-full h-[50%] border-b-2 border-slate-400"
        >
          <Image
            src={c1}
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </Link>
        <div className="w-full flex flex-col py-2 ">
          <div className="w-full flex justify-between items-center px-2">
            <h2 className="text-sm font-bold">Titolo Annuncio</h2>
            <h3 className="text-sm font-bold">200.000€</h3>
          </div>
          <div className="w-full flex justify-between items-center px-2">
            <h3 className="text-xs font-semibold">Numero vani</h3>
            <h3 className="text-xs font-semibold">
              Via Niccolo amante dei trans
            </h3>
          </div>
          <p className="bg-slate-100 w-full border-2 border-primary/30 text-justify text-xs mt-2 py-2 px-2 rounded-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            egestas nulla non ipsum hendrerit tempus. Morbi ligula nunc,
            tincidunt non enim a, aliquam aliquam nisi. Aenean ac lorem rhoncus,
          </p>
        </div>
      </div>
    </>
  );
}
