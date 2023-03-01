import Head from "next/head";
import { Roboto, Archivo_Black } from "next/font/google";

//Componentes
import Banner from "@/components/Banner";
import Shipping from "@/components/Shipping";
import ProductsHomeSection from "@/components/ProductsHomeSection";
import Phrase from "@/components/Phrase";
import Brands from "@/components/Brands";
import ServicesComp from "@/components/ServicesComp";
import Contact from "@/components/Contact";
import Layout from "@/components/Layout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Home</title>
        <meta name='description' content='Pack Eventos / Home' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={roboto.className}>
        <div>
          <Layout>
            <Banner />
            <Shipping />
            <ProductsHomeSection />
            <Phrase />
            <Brands />
            <ServicesComp />
            <Contact id='contacto' />
          </Layout>
        </div>
      </main>
    </>
  );
}
