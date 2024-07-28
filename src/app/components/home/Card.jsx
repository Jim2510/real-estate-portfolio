import Image from "next/image";
import c1 from "../../../../public/c1.jpg";
import c2 from "../../../../public/c2.jpg";
import c3 from "../../../../public/c3.jpg";

export default function Card() {
  return (
    <>
      <div className="hover:scale-110 transition-all ease-in-out w-[320px] h-[370px] rounded-2xl shadow-2xl flex flex-col justify-startitems-center mx-auto">
        <div className="w-full h-[50%] border-b-2 border-slate-400">
          <Image
            src={c1}
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="w-full flex flex-col px-2 py-2">
          <div className="w-full flex justify-between items-center">
            <h2>Titolo Annuncio</h2>
            <h3>200.000€</h3>
          </div>
          <div className="w-full flex justify-between items-center">
            <h3 className="text-sm">Numero vani</h3>
            <h3 className="text-sm">Via Niccolo amante dei trans</h3>
          </div>
          <p className="w-full border-2 border-slate-400 text-justify text-sm mt-2 py-2 px-2 rounded-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            egestas nulla non ipsum hendrerit tempus. Morbi ligula nunc,
            tincidunt non enim a, aliquam aliquam nisi. Aenean ac lorem rhoncus,
          </p>
        </div>
      </div>
    </>
  );
}
