import Layout from "@/components/Layout";
import Titles from "@/components/Titles";
import Product from "@/components/Product";

export default function HotDog() {
  return (
    <Layout>
      <div className='bg-lightGrey py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
        <Titles>PANCHOS</Titles>
        <div className='flex flex-wrap gap-4 justify-center items-center w-full h-auto'>
          {/* CON PAN */}
          <Product
            src='/productsHome/hot dog.png'
            alt='Super Panchos con Pan'
            title='72 Super Panchos con pan Clásico'
            description='BARK'
            price='$5800'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/hot dog.png'
            alt='Super Panchos con Pan'
            title='54 Super Panchos con pan Clásico'
            description='BARK'
            price='$4500'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/hot dog.png'
            alt='Super Panchos con Pan'
            title='36 Super Panchos con pan Clásico'
            description='BARK'
            price='$3200'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/hot dog.png'
            alt='Super Panchos con Pan'
            title='18 Super Panchos con pan Clásico'
            description='BARK'
            price='$1600'
            width='100'
            height='100'
            href=''
          />

          <div className='mt-[2rem] w-full'>
            <Titles>SALCHICHAS SIN PAN</Titles>
          </div>
          {/* SIN PAN */}
          <Product
            src='/productsHome/hot dog.png'
            alt='Super Panchos sin Pan'
            title='72 Salchichas largas'
            description='BARK'
            price='$4000'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/hot dog.png'
            alt='Super Panchos sin Pan'
            title='54 Salchichas largas'
            description='BARK'
            price='$3100'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/hot dog.png'
            alt='Super Panchos sin Pan'
            title='36 Salchichas largas'
            description='BARK'
            price='$2250'
            width='100'
            height='100'
            href=''
          />
          <Product
            src='/productsHome/hot dog.png'
            alt='Super Panchos sin Pan'
            title='18 Salchichas largas'
            description='BARK'
            price='$1250'
            width='100'
            height='100'
            href=''
          />
        </div>
      </div>
    </Layout>
  );
}
