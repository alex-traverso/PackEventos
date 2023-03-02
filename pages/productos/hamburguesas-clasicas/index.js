import Head from "next/head";
import ProductListTwoProducts from "@/components/ProductListTwoProducts";
import {
  classicHamburguersDataWithBread,
  classicHamburguersDataNoBread,
  hamburgerBrands,
} from "@/productsData/classicHamburgersData";

export default function ClassicBurgers() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Productos / Hamburguesas Clásicas </title>
        <meta
          name='description'
          content='Pack Eventos / Productos / Hamburguesas Clásicas'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProductListTwoProducts
        firstTitle='HAMBURGUESAS CLÁSICAS CON PAN'
        secondTitle='HAMBURGUESAS CLÁSICAS SIN PAN'
        brands={hamburgerBrands}
        onlyProductData={classicHamburguersDataNoBread}
        productFullData={classicHamburguersDataWithBread}
      />
    </>
  );
}
