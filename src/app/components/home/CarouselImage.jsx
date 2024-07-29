import Image from "next/image";

const CarouselImage = ({ src, alt }) => {
  return (
    <div className="w-full h-[600px] relative">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
  );
};

export default CarouselImage;
