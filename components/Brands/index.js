import Titles from "../Titles";
import BrandCarousel from "../BrandCarousel";

export default function Brands() {
  return (
    <div className='py-topBottom lg:px-sectionSides m:px-sectionSidesMobile bg-lightGrey  w-full flex flex-col justify-center'>
      <Titles>MARCAS</Titles>
      <p className='text-white text-lg text-center'>
        Las principales marcas con las que trabajamos son:
      </p>
      <div className='mt-8'>
        <BrandCarousel />
      </div>

      {/* <div className='flex m:flex-wrap mt-8 lg:flex-nowrap  m:max-w-xs md:max-w-2xl lg:max-w-auto justify-center items-center gap-5 cursor-pointer'>
        {source.map((image, id) => (
          <ImageToComps key={id} src={image.name} width={100} />
        ))}
      </div> */}
    </div>
  );
}
