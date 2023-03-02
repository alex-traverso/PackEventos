import Titles from "../Titles";
import BrandCarousel from "../BrandCarousel";

export default function Brands() {
  return (
    <div className='py-topBottom lg:px-sectionSides mm:px-sectionSidesMobile bg-lightGrey w-full flex flex-col justify-center'>
      <Titles>MARCAS</Titles>
      <p className='text-white text-lg text-center'>
        Las principales marcas con las que trabajamos son:
      </p>
      <div className='mt-8'>
        <BrandCarousel />
      </div>
    </div>
  );
}
