import Titles from "../Titles";
import ImageToComps from "../ImageToComps";
import Link from "next/link";

import dressing from "public/productsHome/dressing.png";
import burger from "public/productsHome/burger.png";
import hotDog from "public/productsHome/hot dog.png";

export default function ProductsHomeSection() {
  const source = [
    {
      name: dressing,
      url: "/",
    },
    {
      name: burger,
      url: "aboutUs",
    },
    {
      name: hotDog,
      url: "aboutUs",
    },
    {
      name: dressing,
      url: "/",
    },
    {
      name: burger,
      url: "aboutUs",
    },
    {
      name: hotDog,
      url: "aboutUs",
    },
    {
      name: dressing,
      url: "/",
    },
    {
      name: burger,
      url: "aboutUs",
    },
    {
      name: hotDog,
      url: "aboutUs",
    },
  ];

  return (
    <>
      <div className='lg:px-sectionSides py-topBottom m:px-sectionSidesMobile md:px-sectionSides bg-darkGrey md:flex md:justify-center h-auto md:items-center md:self-center md:flex-col m:flex m:justify-center m:items-center m:flex-col'>
        <Titles>PRODUCTOS</Titles>

        <div className='flex m:flex-wrap lg:flex-nowrap m:max-w-xs md:max-w-2xl lg:max-w-4xl justify-center items-center gap-5 cursor-pointer'>
          {source.map((image, id) => (
            <>
              <Link href={source[id].url}>
                <ImageToComps key={id} src={image.name} />
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
