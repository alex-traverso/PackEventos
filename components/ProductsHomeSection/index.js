import Titles from "../Titles";
import ImageToComps from "../ImageToComps";
import Link from "next/link";

import dressing from "public/productsHome/dressing.png";
import burger from "public/productsHome/burger.png";
import hotDog from "public/productsHome/hot dog.png";

export default function ProductsHomeSection() {
  const source = [
    {
      name: burger,
      url: "/productos/hamburguesas",
    },
    {
      name: hotDog,
      url: "/productos/panchos",
    },
    {
      name: dressing,
      url: "/productos/aderezos",
    },
    {
      name: burger,
      url: "/productos/hamburguesas",
    },
    {
      name: hotDog,
      url: "/productos/panchos",
    },
    {
      name: dressing,
      url: "/productos/aderezos",
    },
    {
      name: burger,
      url: "/productos/hamburguesas",
    },
    {
      name: hotDog,
      url: "/productos/panchos",
    },
    {
      name: dressing,
      url: "/productos/aderezos",
    },
  ];

  return (
    <>
      <div className='w-full lg:px-sectionSides py-topBottom m:px-sectionSidesMobile bg-darkGrey md:flex md:justify-center h-auto md:items-center md:self-center md:flex-col m:flex m:justify-center m:items-center m:flex-col'>
        <Titles>PRODUCTOS</Titles>
        <div className='flex m:flex-wrap lg:flex-nowrap m:max-w-xs md:max-w-2xl lg:max-w-full justify-center items-center gap-5 cursor-pointer'>
          {source.map((image, id) => (
            <>
              <Link href={source[id].url}>
                <ImageToComps
                  key={id}
                  src={image.name}
                  className=' duration-500 hover:scale-[1.05] m:h-[60px] w-auto xs:h-[70px] object-contain'
                />
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
