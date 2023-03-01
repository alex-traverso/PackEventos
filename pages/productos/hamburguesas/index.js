import Head from "next/head";
import Titles from "@/components/Titles";
import Layout from "@/components/Layout";
import ProductNoPrice from "@/components/ProductNoPrice";

export default function Hamburgers() {
  const products = [
    {
      title: "Hamburguesas Gigantes",
      src: "/productsHome/burger.png",
      href: "/productos/hamburguesas-gigantes",
    },
    {
      title: "Hamburguesas clásicas",
      src: "/productsHome/burger.png",
      href: "/productos/hamburguesas-clasicas",
    },
  ];

  return (
    <>
      <Head>
        <title>Pack Eventos / Productos / Hamburguesas</title>
        <meta
          name='description'
          content='Pack Eventos / Productos / Hamburguesas'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div
          id='productos'
          className='bg-lightGrey py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'
        >
          <Titles>HAMBURGUESAS</Titles>
          <div className='w-full flex flex-wrap gap-8 justify-center items-center'>
            {products.map((product, id) => (
              <ProductNoPrice
                key={id}
                src={product.src}
                brandsrc={product.brandsrc}
                title={product.title}
                description={product.description}
                price={product.price}
                href={product.href}
                width={100}
                height={100}
                className='object-contain'
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
