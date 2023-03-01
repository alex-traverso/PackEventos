import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Image from "next/image";
import Product from "@/components/Product";
import {
  classicHamburguersDataWithBread,
  classicHamburguersDataNoBread,
  hamburgerBrands,
} from "@/productsData/classicHamburgersData";

export default function ClassicBurgers() {
  return (
    <Layout>
      <div className='bg-lightGrey w-full py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
        <Titles>HAMBURGUESAS CLÁSICAS CON PAN</Titles>
        <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
          <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
            {hamburgerBrands.map((brand, id) => (
              <Image
                key={id}
                src={brand.src}
                alt={brand.alt}
                width='100'
                height='100'
                className='object-contain'
              ></Image>
            ))}
          </div>
        </div>
        <div className='flex flex-wrap gap-4 justify-start items-center w-full h-auto'>
          {classicHamburguersDataWithBread.map((hamburger, id) => (
            <Product
              key={id}
              src={hamburger.src}
              alt={hamburger.alt}
              title={hamburger.title}
              description={hamburger.description}
              price={hamburger.price}
              width={hamburger.width}
              height={hamburger.height}
            />
          ))}
          <div className='mt-[2rem] w-full'>
            <Titles>HAMBURGUESAS CLÁSICAS SIN PAN</Titles>
          </div>
          {/* HAMBURGUESAS SIN PAN */}
          <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
            {hamburgerBrands.map((brand, id) => (
              <Image
                key={id}
                src={brand.src}
                alt={brand.alt}
                width='100'
                height='100'
                className='object-contain'
              ></Image>
            ))}
          </div>
          {classicHamburguersDataNoBread.map((hamburger, id) => (
            <Product
              key={id}
              src={hamburger.src}
              alt={hamburger.alt}
              title={hamburger.title}
              description={hamburger.description}
              price={hamburger.price}
              width={hamburger.width}
              height={hamburger.height}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
