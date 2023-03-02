import Head from "next/head";
import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Image from "next/image";
import Product from "@/components/Product";
import { potatoes, potatoesBrands } from "@/productsData/potatoesData";

export default function Potatoes() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Productos / Papas congeladas </title>
        <meta
          name='description'
          content='Pack Eventos / Productos / Papas congeladas'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='bg-lightGrey w-full py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
          <Titles>PAPAS CONGELADAS</Titles>
          <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
            <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
              {potatoesBrands.map((brand, id) => (
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
          <div className='flex flex-wrap gap-4 justify-center items-start w-full h-auto'>
            {potatoes.map((potatoe, id) => (
              <Product
                key={id}
                src={potatoe.src}
                alt={potatoe.alt}
                title={potatoe.title}
                description={potatoe.description}
                price={potatoe.price}
                width={potatoe.width}
                height={potatoe.height}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
