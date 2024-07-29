import Image from "next/image";
import Navbar from "../components/Navbar";
import toscano from "../../../public/toscano.jpg";
import team from "../../../public/team.jpg";
import hand from "../../../public/hand.jpg";
import office from "../../../public/office.jpg";
import ct from "../../../public/ct.jpg";

export default function About() {
  return (
    <>
      <div>
        <Navbar />
        <div className="w-full px-4 mt-[100px] md:px-16 lg:px-32 xl:px-72 flex flex-col mb-20 gap-20">
          {/* Sezione 1 */}
          <div className="flex flex-col md:flex-row items-start mb-20">
            {/* Testo */}
            <div className="flex-1 text-justify md:pr-8 mb-8 md:mb-0">
              <h1 className="font-extrabold text-4xl py-4">
                Toscano Real Estate Agency
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                egestas nulla non ipsum hendrerit tempus. Morbi ligula nunc,
                tincidunt non enim a, aliquam aliquam nisi. Aenean ac lorem
                rhoncus, feugiat lacus non, condimentum dui. Etiam dui tortor,
                mollis sit amet purus vitae, consequat accumsan est. Maecenas in
                tortor eget dolor tempor euismod. Donec sollicitudin suscipit
                risus a tincidunt. Morbi at lobortis lorem. Donec egestas, justo
                interdum facilisis scelerisque, quam leo mollis nibh, et
                pellentesque leo lacus vel nibh. Sed tellus risus, euismod in
                dignissim vitae, tempor ac neque. Suspendisse dolor est, cursus
                sed vehicula et, malesuada id metus. Maecenas ultricies gravida
                vulputate. Quisque auctor tempor nunc ac tristique. Nunc viverra
                efficitur sem, at egestas nisi commodo id. Maecenas quis rhoncus
                risus, placerat tincidunt ex. Nullam malesuada tincidunt quam,
                sit amet pulvinar risus vehicula ac. Donec eu ultricies lectus,
                at hendrerit quam. Quisque ultricies aliquam rutrum. Sed sodales
                scelerisque ligula. Etiam interdum dolor ut elit tincidunt
                tincidunt. Donec vitae convallis lectus. Quisque rutrum laoreet
                sem eu aliquam. Quisque sed euismod tortor, non sollicitudin
                urna. Integer in sagittis nulla, ac suscipit augue. Vivamus ut
                nisi posuere, vulputate dolor eget, dictum turpis. Nam cursus
                ipsum ut urna condimentum iaculis. Quisque mollis, elit at
                euismod pharetra, turpis leo tincidunt diam, sed consequat sem
                ipsum maximus ligula.
              </p>
            </div>

            {/* Immagine */}
            <div className="flex-1">
              <Image
                src={toscano}
                alt="Toscano Real Estate"
                className="w-full h-auto object-cover rounded-lg mt-5"
              />
            </div>
          </div>

          {/* Sezione 2 */}
          <div className="flex flex-col md:flex-row items-start mb-20">
            {/* Immagini */}
            <div className="flex-1 flex flex-col space-y-4 md:space-y-8 mt-5 gap-4">
              <div className="flex">
                <Image
                  src={team}
                  alt="Team"
                  className="w-full h-auto max-h-[200px] object-cover rounded-lg"
                />
              </div>
              <div className="flex">
                <Image
                  src={hand}
                  alt="Hand"
                  className="w-full h-auto max-h-[200px] object-cover rounded-lg"
                />
              </div>
              <div className="flex">
                <Image
                  src={office}
                  alt="Office"
                  className="w-full h-auto max-h-[200px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Testo */}
            <div className="flex-1 text-justify md:pl-8">
              <h1 className="font-extrabold text-4xl py-4">
                Discover Our Team
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                egestas nulla non ipsum hendrerit tempus. Morbi ligula nunc,
                tincidunt non enim a, aliquam aliquam nisi. Aenean ac lorem
                rhoncus, feugiat lacus non, condimentum dui. Etiam dui tortor,
                mollis sit amet purus vitae, consequat accumsan est. Maecenas in
                tortor eget dolor tempor euismod. Donec sollicitudin suscipit
                risus a tincidunt. Morbi at lobortis lorem. Donec egestas, justo
                interdum facilisis scelerisque, quam leo mollis nibh, et
                pellentesque leo lacus vel nibh. Sed tellus risus, euismod in
                dignissim vitae, tempor ac neque. Suspendisse dolor est, cursus
                sed vehicula et, malesuada id metus. Maecenas ultricies gravida
                vulputate. Quisque auctor tempor nunc ac tristique. Nunc viverra
                efficitur sem, at egestas nisi commodo id. Maecenas quis rhoncus
                risus, placerat tincidunt ex. Nullam malesuada tincidunt quam,
                sit amet pulvinar risus vehicula ac. Donec eu ultricies lectus,
                at hendrerit quam. Quisque ultricies aliquam rutrum. Sed sodales
                scelerisque ligula. Etiam interdum dolor ut elit tincidunt
                tincidunt. Donec vitae convallis lectus. Quisque rutrum laoreet
                sem eu aliquam. Quisque sed euismod tortor, non sollicitudin
                urna. Integer in sagittis nulla, ac suscipit augue. Vivamus ut
                nisi posuere, vulputate dolor eget, dictum turpis. Nam cursus
                ipsum ut urna condimentum iaculis. Quisque mollis, elit at
                euismod pharetra, turpis leo tincidunt diam, sed consequat sem
                ipsum maximus ligula.
              </p>
            </div>
          </div>

          {/* Sezione 3 */}
          <div className="flex flex-col md:flex-row items-start">
            {/* Testo */}
            <div className="flex-1 text-justify md:pr-8 mb-8 md:mb-0">
              <h1 className="font-extrabold text-4xl py-4">
                Acquisition Process
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                egestas nulla non ipsum hendrerit tempus. Morbi ligula nunc,
                tincidunt non enim a, aliquam aliquam nisi. Aenean ac lorem
                rhoncus, feugiat lacus non, condimentum dui. Etiam dui tortor,
                mollis sit amet purus vitae, consequat accumsan est. Maecenas in
                tortor eget dolor tempor euismod. Donec sollicitudin suscipit
                risus a tincidunt. Morbi at lobortis lorem. Donec egestas, justo
                interdum facilisis scelerisque, quam leo mollis nibh, et
                pellentesque leo lacus vel nibh. Sed tellus risus, euismod in
                dignissim vitae, tempor ac neque. Suspendisse dolor est, cursus
                sed vehicula et, malesuada id metus. Maecenas ultricies gravida
                vulputate. Quisque auctor tempor nunc ac tristique. Nunc viverra
                efficitur sem, at egestas nisi commodo id. Maecenas quis rhoncus
                risus, placerat tincidunt ex. Nullam malesuada tincidunt quam,
                sit amet pulvinar risus vehicula ac. Donec eu ultricies lectus,
                at hendrerit quam. Quisque ultricies aliquam rutrum. Sed sodales
                scelerisque ligula. Etiam interdum dolor ut elit tincidunt
                tincidunt. Donec vitae convallis lectus. Quisque rutrum laoreet
                sem eu aliquam. Quisque sed euismod tortor, non sollicitudin
                urna. Integer in sagittis nulla, ac suscipit augue. Vivamus ut
                nisi posuere, vulputate dolor eget, dictum turpis. Nam cursus
                ipsum ut urna condimentum iaculis. Quisque mollis, elit at
                euismod pharetra, turpis leo tincidunt diam, sed consequat sem
                ipsum maximus ligula.
              </p>
            </div>

            {/* Immagine */}
            <div className="flex-1">
              <Image
                src={ct}
                alt="Acquisition Process"
                className="w-full h-auto object-cover rounded-lg mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
