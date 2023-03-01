import Head from "next/head";
import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Product from "@/components/Product";
import { hotDogDataWithBread, hotDogData } from "@/productsData/hotDogsData";

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
          <Titles>PANCHOS</Titles>
          <div className='flex flex-wrap gap-4 justify-center items-center w-full h-auto'>
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
              <Titles>SALCHICHAS SIN PAN</Titles>
            </div>
            {/* SIN PAN */}
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
