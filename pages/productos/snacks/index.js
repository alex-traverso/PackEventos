import Head from "next/head";
import ProductListOneProduct from "@/components/ProductListOneProduct";
import { snacksData, snacksBrands } from "@/productsData/snacksData";

export default function Snacks() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Productos / Snacks </title>
        <meta name='description' content='Pack Eventos / Productos / Snacks' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProductListOneProduct
        title='SNACKS'
        productFullData={snacksData}
        brands={snacksBrands}
      />
    </>
  );
}
