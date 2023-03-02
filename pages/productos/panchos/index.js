import Head from "next/head";
import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Product from "@/components/Product";
import Image from "next/image";
import {
  hotDogDataWithBread,
  hotDogData,
  hotDogsBrands,
} from "@/productsData/hotDogsData";

export default function HotDog() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Productos / Panchos </title>
        <meta name='description' content='Pack Eventos / Productos / Panchos' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='bg-lightGrey py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
          <Titles>SUPER PANCHOS</Titles>
          <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
            {hotDogsBrands.map((brand, id) => (
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
          <div className='flex flex-wrap gap-4 justify-center items-start w-full h-auto'>
            {/* CON PAN */}
            {hotDogDataWithBread.map((hotDog, id) => (
              <Product
                key={id}
                src={hotDog.src}
                alt={hotDog.alt}
                title={hotDog.title}
                description={hotDog.description}
                price={hotDog.price}
                width={hotDog.width}
                height={hotDog.height}
              />
            ))}
            <div className='mt-[2rem] w-full'>
              <Titles>SALCHICHAS LARGAS SIN PAN</Titles>
            </div>
            {/* SIN PAN */}
            <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
              {hotDogsBrands.map((brand, id) => (
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
            {hotDogData.map((hotDog, id) => (
              <Product
                key={id}
                src={hotDog.src}
                alt={hotDog.alt}
                title={hotDog.title}
                description={hotDog.description}
                price={hotDog.price}
                width={hotDog.width}
                height={hotDog.height}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
