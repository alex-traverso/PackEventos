import Titles from "../Titles";
import ImageToComps from "../ImageToComps";
import Link from "next/link";

import dressing from "public/products/aderezos/mayonesa.png";
import burger from "public/productsHome/burger.png";
import hotDog from "public/productsHome/hot dog.png";
import sardoCheese from "public/productsHome/queso.png";
import nuggets from "public/productsHome/nuggets.png";
import potatoes from "public/productsHome/papas-congeladas.png";

export default function ProductsHomeSection() {
  const productsHome = [
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
      name: sardoCheese,
      url: "/productos/quesos",
    },
    {
      name: nuggets,
      url: "/productos/rebozados",
    },
    {
      name: potatoes,
      url: "/productos/congelados",
    },
  ];

  return (
    <>
      <div className='w-full lg:px-sectionSides py-topBottom  mm:px-sectionSidesMobile bg-darkGrey md:flex md:justify-center h-auto md:items-center md:self-center md:flex-col  mm:flex  mm:justify-center  mm:items-center  mm:flex-col'>
        <Titles>PRODUCTOS</Titles>
        <div className='flex  mm:flex-wrap lg:flex-nowrap  mm:max-w-xs md:max-w-2xl lg:max-w-full justify-center items-center gap-10 cursor-pointer'>
          {productsHome.map((image, id) => (
            <>
              <Link href={productsHome[id].url}>
                <ImageToComps
                  key={id}
                  src={image.name}
                  className='duration-500 hover:scale-[1.05]  mm:h-[60px] w-auto xs:h-[85px] object-contain'
                />
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
