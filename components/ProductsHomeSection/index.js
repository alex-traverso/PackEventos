import Titles from "../Titles";
import ProductHome from "../ProductHome";
import Image from "next/image";
import dressing from "public/productsHome/dressing.png";
import burger from "public/productsHome/burger.png";
import hotDog from "public/productsHome/hot dog.png";

export default function ProductsHomeSection() {
  return (
    <>
      <div className='lg:px-sectionSides m:px-sectionSidesMobile py-topBottom bg-darkGrey md:flex md:justify-center h-auto md:items-center md:self-center md:flex-col m:flex m:justify-center m:items-center m:flex-col'>
        <Titles>PRODUCTOS</Titles>

        <div className='flex justify-center items-center gap-5 w-auto xl:w-[600px] md:w-[400px] xs:w-[350px] m:w-[300px]'>
          <ProductHome src={burger} width={100} />
          <ProductHome src={hotDog} width={100} />
          <ProductHome src={dressing} width={100} />
          <ProductHome src={burger} width={100} />
          <ProductHome src={hotDog} width={100} />
          <ProductHome src={dressing} width={100} />
          <ProductHome src={burger} width={100} />
          <ProductHome src={hotDog} width={100} />
          <ProductHome src={dressing} width={100} />
        </div>
      </div>
    </>
  );
}
