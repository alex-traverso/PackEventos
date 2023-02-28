import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Product from "@/components/Product";

export default function Burgers() {
  return (
    <Layout>
      <div className='bg-lightGrey py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
        <Titles>HAMBURGUESAS CON PAN</Titles>
        <div className='flex flex-wrap gap-4 justify-start items-center w-full h-auto'>
          {/* LA DEFENSA CON PAN */}
          <Product
            src='/productsHome/burger.png'
            alt='40 hamburguesas con pan'
            title='40 hamburguesas con pan'
            brandsrc='/brands/la-defensa.png'
            description='LA DEFENSA 30 % Soja x 110 Grs'
            price='$3.900'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/burger.png'
            alt='20 hamburguesas con pan'
            title='20 hamburguesas con pan'
            brandsrc='/brands/la-defensa.png'
            description='LA DEFENSA'
            price='$2.300'
            width='100'
            height='100'
            href=''
          />

          {/* VICTORIA CON PAN */}
          <Product
            src='/productsHome/burger.png'
            alt='40 hamburguesas con pan'
            title='40 hamburguesas con pan'
            brandsrc='/brands/victoria.png'
            description='VICTORIA'
            price='$10.700'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/burger.png'
            alt='20 hamburguesas con pan'
            title='20 hamburguesas con pan'
            brandsrc='/brands/victoria.png'
            description='VICTORIA'
            price='$5.900'
            width='100'
            height='100'
            href=''
          />

          {/* BOOGYS CON PAN */}
          <Product
            src='/productsHome/burger.png'
            alt='40 hamburguesas con pan'
            title='40 hamburguesas con pan'
            brandsrc='/brands/boogys.png'
            description='BOOGYS'
            price='$13.300'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/burger.png'
            alt='20 hamburguesas con pan'
            title='20 hamburguesas con pan'
            brandsrc='/brands/boogys.png'
            description='BOOGYS'
            price='$7.300'
            width='100'
            height='100'
            href=''
          />

          {/* UNION GANADERA CON PAN */}
          <Product
            src='/productsHome/burger.png'
            alt='40 hamburguesas con pan'
            title='40 hamburguesas con pan'
            brandsrc='/brands/unionganadera.png'
            description='UNIÓN GANADERA'
            price='$13.300'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/burger.png'
            alt='20 hamburguesas con pan'
            brandsrc='/brands/unionganadera.png'
            title='20 hamburguesas con pan'
            description='UNIÓN GANADERA'
            price='$7.300'
            width='100'
            height='100'
            href=''
          />

          <div className='mt-[2rem] w-full'>
            <Titles>HAMBURGUESAS SIN PAN</Titles>
          </div>
          {/* HAMBURGUESAS SIN PAN */}
          {/* LA DEFENSA SIN PAN */}
          <Product
            src='/productsHome/burger.png'
            alt='40 hamburguesas sin pan'
            brandsrc='/brands/la-defensa.png'
            title='40 hamburguesas sin pan'
            description='LA DEFENSA'
            price='$2.590'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/burger.png'
            alt='20 hamburguesas sin pan'
            brandsrc='/brands/la-defensa.png'
            title='20 hamburguesas sin pan'
            description='LA DEFENSA'
            price='$1.450'
            width='100'
            height='100'
            href=''
          />

          {/* VICTORIA SIN PAN */}
          <Product
            src='/productsHome/burger.png'
            alt='40 hamburguesas sin pan'
            title='40 hamburguesas sin pan'
            brandsrc='/brands/victoria.png'
            description='VICTORIA'
            price='$9.380'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/burger.png'
            alt='20 hamburguesas sin pan'
            title='20 hamburguesas sin pan'
            brandsrc='/brands/victoria.png'
            description='VICTORIA'
            price='$5.130'
            width='100'
            height='100'
            href=''
          />

          {/* BOOGYS SIN PAN */}
          <Product
            src='/productsHome/burger.png'
            alt='40 hamburguesas sin pan'
            title='40 hamburguesas sin pan'
            brandsrc='/brands/boogys.png'
            description='BOOGYS'
            price='$9.800'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/burger.png'
            alt='20 hamburguesas sin pan'
            title='20 hamburguesas sin pan'
            brandsrc='/brands/boogys.png'
            description='BOOGYS'
            price='$5.400'
            width='100'
            height='100'
            href=''
          />

          {/* UNION GANADERA SIN PAN */}
          <Product
            src='/productsHome/burger.png'
            alt='40 hamburguesas sin pan'
            title='40 hamburguesas sin pan'
            brandsrc='/brands/unionganadera.png'
            description='UNIÓN GANADERA'
            price='$11.900'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/burger.png'
            alt='20 hamburguesas sin pan'
            title='20 hamburguesas sin pan'
            brandsrc='/brands/unionganadera.png'
            description='UNIÓN GANADERA'
            price='$6.540'
            width='100'
            height='100'
            href=''
          />
        </div>
      </div>
    </Layout>
  );
}
