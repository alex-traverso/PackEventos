import Head from "next/head";
import ProductListOneProduct from "@/components/ProductListOneProduct";
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
      <ProductListOneProduct
        title='PAPAS CONGELADAS'
        productFullData={potatoes}
        brands={potatoesBrands}
      />
    </>
  );
}
