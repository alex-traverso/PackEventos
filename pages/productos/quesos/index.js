import Head from "next/head";
import ProductListOneProduct from "@/components/ProductListOneProduct";
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
      <ProductListOneProduct
        title='QUESOS'
        productFullData={cheeseData}
        brands={cheeseBrands}
      />
    </>
  );
}
