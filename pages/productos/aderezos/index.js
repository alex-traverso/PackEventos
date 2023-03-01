import Head from "next/head";
import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Product from "@/components/Product";
import {
  dressingDataKnob,
  dressingDataSachet,
} from "@/productsData/dressingData";

export default function Dressing() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Productos / Aderezos </title>
        <meta
          name='description'
          content='Pack Eventos / Productos / Aderezos'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='bg-lightGrey py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
          <Titles>ADEREZOS X 500CC</Titles>
          <div className='flex flex-wrap gap-4 justify-center items-center w-full h-auto'>
            {dressingDataKnob.map((dressing, id) => (
              <Product
                key={id}
                src={dressing.src}
                alt={dressing.alt}
                title={dressing.title}
                description={dressing.description}
                price={dressing.price}
                width={dressing.width}
                height={dressing.height}
              />
            ))}

            <div className='mt-[2rem] w-full'>
              <Titles>ADEREZOS X 3.000GRS</Titles>
            </div>
            {/* ADEREZOS SACHET */}
            {dressingDataSachet.map((dressing, id) => (
              <Product
                key={id}
                src={dressing.src}
                alt={dressing.alt}
                title={dressing.title}
                description={dressing.description}
                price={dressing.price}
                width={dressing.width}
                height={dressing.height}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
