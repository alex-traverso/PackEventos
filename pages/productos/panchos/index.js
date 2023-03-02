import Head from "next/head";
import {
  hotDogDataWithBread,
  hotDogData,
  hotDogsBrands,
} from "@/productsData/hotDogsData";
import ProductListTwoProducts from "@/components/ProductListTwoProducts";

export default function HotDog() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Productos / Panchos </title>
        <meta name='description' content='Pack Eventos / Productos / Panchos' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProductListTwoProducts
        firstTitle='SUPER PANCHOS'
        secondTitle='SALCHICHAS LARGAS SIN PAN'
        brands={hotDogsBrands}
        onlyProductData={hotDogData}
        productFullData={hotDogDataWithBread}
      />
    </>
  );
}
