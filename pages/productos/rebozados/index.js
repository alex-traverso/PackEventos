import Head from "next/head";
import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Image from "next/image";
import Product from "@/components/Product";
import { breadedData, breadedBrands } from "@/productsData/breadedData";

export default function Breaded() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Productos / Rebozados </title>
        <meta
          name='description'
          content='Pack Eventos / Productos / Rebozados'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='bg-lightGrey w-full py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
          <Titles>REBOZADOS</Titles>
          <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
            {breadedBrands.map((brand, id) => (
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
            {breadedData.map((breaded, id) => (
              <Product
                key={id}
                src={breaded.src}
                alt={breaded.alt}
                title={breaded.title}
                description={breaded.description}
                price={breaded.price}
                width={breaded.width}
                height={breaded.height}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
