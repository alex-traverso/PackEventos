import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Product from "@/components/Product";

export default function Dressing() {
  return (
    <Layout>
      <div className='bg-lightGrey py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
        <Titles>ADEREZOS X 500CC</Titles>
        <div className='flex flex-wrap gap-4 justify-start items-center w-full h-auto'>
          <Product
            src='/products/mayonesa.png'
            alt='Mayonesa'
            title='Mayonesa'
            description='BENIDORM'
            price='$350'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/mostaza.png'
            alt='Mostaza'
            title='Mostaza'
            description='BENIDORM'
            price='$350'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/ketchup.png'
            alt='Salsa Golf'
            title='Salsa Golf'
            description='BENIDORM'
            price='$370'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/salsa-golf.png'
            alt='Ketchup'
            title='Ketchup'
            description='BENIDORM'
            price='$390'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/mayonesa-aceitunas.png'
            alt='Mayonesa con aceituna'
            title='Mayonesa con aceituna'
            description='BENIDORM'
            price='$450'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/queso-cheddar.png'
            alt='Queso cheddar'
            title='Queso cheddar'
            description='BENIDORM'
            price='$450'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/queso-parmesano.png'
            alt='Queso parmesano'
            title='Queso parmesano'
            description='BENIDORM'
            price='$450'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/barbacoa.png'
            alt='Barbacoa'
            title='Barbacoa'
            description='BENIDORM'
            price='$450'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/picante.png'
            alt='Picante'
            title='Picante'
            description='BENIDORM'
            price='$450'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/chimichurri.png'
            alt='Chimichurri'
            title='Chimichurri'
            description='BENIDORM'
            price='$450'
            width='100'
            height='100'
            href=''
          />

          <div className='mt-[2rem] w-full'>
            <Titles>ADEREZOS X 3.000GRS</Titles>
          </div>
          {/* ADEREZOS SACHET */}
          <Product
            src='/products/mayonesa-sachet.png'
            alt='Sachet Mayonesa'
            title='Sachet Mayonesa'
            description='BENIDORM'
            price='$900'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/salsa-golf.png'
            alt='Sachet Mostaza'
            title='Sachet Mostaza'
            description='BENIDORM'
            price='$900'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/salsa-golf-sachet.png'
            alt='Sachet Salsa Golf'
            title='Sachet Salsa Golf'
            description='BENIDORM'
            price='$1200'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/products/ketchup-sachet.png'
            alt='Sachet Ketchup'
            title='Sachet Ketchup'
            description='BENIDORM'
            price='$1500'
            width='100'
            height='100'
            href=''
          />
        </div>
      </div>
    </Layout>
  );
}
