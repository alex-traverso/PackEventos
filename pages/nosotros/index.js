import Head from "next/head";
import React from "react";
import Titles from "@/components/Titles";
import Layout from "@/components/Layout";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Pack Eventos / Nosotros</title>
        <meta name='description' content='Pack Eventos / Nosotros' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='bg-lightGrey py-topBottom lg:px-sectionSides m:px-sectionSidesMobile'>
          <Titles>NOSOTROS</Titles>
          <div className='flex justify-center'>
            <p className='text-white lg:w-[45vw] md:w-[50vw] m:w-[60vw]'>
              Bienvenido a Pack Eventos, una empresa familiar dedicada a la
              distribución de panchos y hamburguesas congelados para el sector
              gastronómico. Desde hace varios años, hemos estado proporcionando
              productos de alta calidad a eventos, kioscos, colegios, clubes,
              carros de comida y otros negocios de alimentos en el partido de
              Escobar y aledaños.
              <br />
              <br />
              Nos enorgullece ofrecer una amplia variedad de productos de alta
              calidad, desde nuestras hamburguesas y panchos clásicos hasta
              productos como quesos, papas congeladas, rebozados, aderezos y
              papas pay.
              <br />
              <br />
              En nuestro negocio, nos preocupamos profundamente por la
              satisfacción del cliente. Es por eso que ofrecemos una amplia gama
              de opciones de entrega, incluyendo envío domiciliario y puntos de
              encuentro en el partido de Escobar y aledaños. Ya sea que esté
              organizando un evento o necesite productos para su negocio,
              estamos para satisfacer sus necesidades.
              <br />
              <br />
              Además de nuestros productos de alta calidad, nos enorgullece
              ofrecer un servicio excepcional al cliente. Nuestro equipo de
              atención al cliente está siempre a disposición para ayudar con
              cualquier pregunta o preocupación que puedas tener, y trabajamos
              duro para garantizar que cada pedido se entregue en tiempo y
              forma.
              <br />
              <br />
              En resumen, en Pack Eventos somos una Pyme familiar dedicada a
              ofrecer productos de alta calidad y servicio excepcional al
              cliente. Si está buscando una fuente confiable de hamburguesas y
              panchos congelados para su negocio, no dude en ponerse en contacto
              con nosotros hoy mismo. Estamos para ayudarte.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
