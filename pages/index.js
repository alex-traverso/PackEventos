import Head from "next/head";
import { Inter } from "next/font/google";

//Componentes
import Banner from "@/components/Banner";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pack Eventos / Home</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>
          <NavBar />
          <Banner />
          <h1 className=' text-red-500'>Hello World</h1>
        </div>
      </main>
    </>
  );
}
