import Head from "next/head";
import ProductListTwoProducts from "@/components/ProductListTwoProducts";
import {
  dressingDataKnob,
  dressingDataSachet,
  dressingBrands,
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
      <ProductListTwoProducts
        firstTitle='ADEREZOS X 500CC'
        secondTitle='ADEREZOS X 3.000GRS'
        brands={dressingBrands}
        onlyProductData={dressingDataSachet}
        productFullData={dressingDataKnob}
      />
    </>
  );
}
