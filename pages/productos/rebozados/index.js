import Head from "next/head";
import { breadedData, breadedBrands } from "@/productsData/breadedData";
import ProductListOneProduct from "@/components/ProductListOneProduct";

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
      <ProductListOneProduct
        title='REBOZADOS'
        productFullData={breadedData}
        brands={breadedBrands}
      />
    </>
  );
}
