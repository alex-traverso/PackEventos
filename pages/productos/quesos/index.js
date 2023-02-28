import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Image from "next/image";
import Product from "@/components/Product";

export default function Burgers() {
  const brands = [
    {
      src: "/brands/la-defensa.png",
      alt: "La defensa",
    },
    {
      src: "/brands/victoria-fondo.png",
      alt: "Victoria",
    },
    {
      src: "/brands/boogys.png",
      alt: "Boogys",
    },
    {
      src: "/brands/unionganadera.png",
      alt: "Union ganadera",
    },
  ];

  return (
    <Layout>
      <div className='bg-lightGrey w-full py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
        <Titles>QUESOS</Titles>
        <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
          {brands.map((brand, id) => (
            <Image
              key={id}
              src={brand.src}
              alt={brand.alt}
              width='100'
              height='100'
              className='object-contain'
            ></Image>
          ))}
        </div>

        <div className='flex flex-wrap gap-4 justify-start items-center w-full h-auto'>
          {/* QUESOS */}
          <Product
            src='/products/quesos/cremoso-punta-del-agua.png'
            alt='Queso cremoso'
            title='Queso cremoso'
            description='3,9 a 4,5 Aprox'
            price='$1.330'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/porsalut-punta-del-agua.png'
            alt='Por salut'
            title='Por salut'
            description='3,9 a 4,5 Aprox'
            price='$1.440'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/porsalut-light-punta-del-agua.png'
            alt='Por salut Light'
            title='Por salut Light'
            description='3,9 a 4,5 Aprox'
            price='$1.560'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/tybo-punta-del-agua.png'
            alt='Tybo'
            title='Tybo'
            description='3,3kg Aprox'
            price='$1.890'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/danbo-punta-del-agua.png'
            alt='Danbo'
            title='Danbo'
            description='4,5 a 5kg Aprox'
            price='$1.890'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/mozzarella-punta-del-agua.png'
            alt='Muzzarella'
            title='Muzzarella'
            description='2,5 a 2,7kg Aprox'
            price='$1.640'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/queso-sardo.png'
            alt='Sardo'
            title='Sardo'
            description='3 a 3,5kg Aprox'
            price='$2.370'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/fynbo-horma.png'
            alt='Fynbo'
            title='Fynbo'
            description='5,5kg Aprox'
            price='$1.890'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/reggianito-horma.png'
            alt='Reggianito'
            title='Reggianito'
            description='6,5 a 7kg Aprox'
            price='$2.370'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/sardo.png'
            alt='Sardo fresco'
            title='Sardo fresco'
            description='3 a 3,5kg Aprox'
            price='$1.740'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/roquefort-emperador.png'
            alt='Roquefort'
            title='Roquefort'
            description='2kg Aprox'
            price='$1.950'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/cremigal-por-salut-sin-sal.png'
            alt='Por salut sin sal'
            title='Por salut sin sal'
            description='3,9 a 4,5kg Aprox'
            price='$1.640'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/cremigal-cremoso.png'
            alt='Queso cremoso'
            title='Queso cremoso'
            description='3,9 a 4,5kg Aprox'
            price='$1.420'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/cremigal-por-salut.png'
            alt='Por salut'
            title='Por salut'
            description='3,9 a 4,5kg Aprox'
            price='$1.590'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/cremigal-por-salut-light.png'
            alt='Por salut Light'
            title='Por salut Light'
            description='3,9 a 4,5kg Aprox'
            price='$1.720'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/cremoso-los-alisos.png'
            alt='Queso cremoso'
            title='Queso cremoso'
            description='3,9 a 4,5kg Aprox'
            price='$1.290'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/tybo-los-alisos.png'
            alt='Tybo'
            title='Tybo'
            description='3,9 a 4,5kg Aprox'
            price='$1.800'
            width='100'
            height='100'
          />
          <Product
            src='/products/quesos/muzzarella-los-alisos.png'
            alt='Muzarella'
            title='Muzarella'
            description='3,5kg Aprox'
            price='$1.490'
            width='100'
            height='100'
          />
        </div>
      </div>
    </Layout>
  );
}
