import Head from "next/head";
import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Image from "next/image";
import Product from "@/components/Product";
import { cheeseData, cheeseBrands } from "@/productsData/cheeseData";

export default function Cheese() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Productos / Quesos </title>
        <meta name='description' content='Pack Eventos / Productos / Quesos' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='bg-lightGrey w-full py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
          <Titles>QUESOS</Titles>
          <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
            {cheeseBrands.map((brand, id) => (
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
            {/* QUESOS */}
            {cheeseData.map((cheese, id) => (
              <Product
                key={id}
                src={cheese.src}
                alt={cheese.alt}
                title={cheese.title}
                description={cheese.description}
                price={cheese.price}
                width={cheese.width}
                height={cheese.height}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
