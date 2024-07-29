import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <div className="w-full h-full">
        <Navbar />
        <div className="w-full px-72 border-x-2 border-primary pt-20">
          <div className="w-full h-[400px] rounded-md shadow-2xl grid grid-cols-2">
            <div className="p-10 flex flex-col justify-start items-center">
              <h2 className="text-2xl font-semibold py-6">
                Hai bisogno di una consulenza?
              </h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                feugiat elit ut ornare imperdiet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam nec ante egestas, cursus dui
                vel, ultrices velit. Fusce nisl eros, aliquet non rutrum non,
                posuere eget mauris.
              </p>
            </div>
            <div className="w-full px-10 py-6 flex flex-col justify-start items-center">
              <form
                action=""
                className="flex flex-col justify-start items-center w-full gap-5"
              >
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="" className="font-semibold text-sm">
                    Nome / Attivita'
                  </label>
                  <input
                    placeholder="I piedi di Miriana mlml"
                    type="text"
                    className="w-full p-1 focus:outline-none focus:border-primary rounded-sm border-2 border-slate-400"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="" className="font-semibold text-sm">
                    Telefono
                  </label>
                  <input
                    placeholder="+39"
                    type="text"
                    className="w-full p-1 focus:outline-none focus:border-primary rounded-sm border-2 border-slate-400"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="" className="font-semibold text-sm">
                    Info utili
                  </label>
                  <textarea
                    type="text"
                    className="w-full h-[100px] p-1 focus:outline-none focus:border-primary rounded-sm border-2 border-slate-400"
                  />
                </div>
                <button className="text-white font-bold px-6 py-1 bg-primary">
                  Invia
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
