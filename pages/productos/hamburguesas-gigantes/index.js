import Head from "next/head";
import {
  gigantHamburguersDataWithBread,
  gigantHamburguersData,
  hamburgerBrands,
} from "@/productsData/gigantHamburgersData";
import ProductListTwoProducts from "@/components/ProductListTwoProducts";

export default function GigantBurgers() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Productos / Hamburguesas Gigantes </title>
        <meta
          name='description'
          content='Pack Eventos / Productos / Hamburguesas Gigantes'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProductListTwoProducts
        firstTitle='HAMBURGUESAS GIGANTES CON PAN'
        secondTitle='HAMBURGUESAS GIGANTES SIN PAN'
        brands={hamburgerBrands}
        onlyProductData={gigantHamburguersData}
        productFullData={gigantHamburguersDataWithBread}
      />
    </>
  );
}
