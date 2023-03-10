import Titles from "../Titles";
import Image from "next/image";
import Layout from "../Layout";
import Product from "../Product";

export default function ProductListTwoProducts({
  firstTitle,
  secondTitle,
  brands,
  onlyProductData,
  productFullData,
}) {
  return (
    <Layout>
      <div className='bg-lightGrey w-full py-topBottom  mm:px-sectionSidesMobile lg:px-sectionSides'>
        {/* PRODUCTO COMPLETO, CON PAN POR EJEMPLO */}
        <Titles>{firstTitle}</Titles>
        <div
          className='mb-10 w-full h-[120px] flex justify-center  mm:flex
           mm:flex-wrap  mm:h-max gap-10'
        >
          {brands.map((brand, id) => (
            <Image
              key={id}
              src={brand.src}
              alt={brand.alt}
              width={100}
              height={100}
              className='object-contain mm:h-[50px] md:h-[60px]'
            ></Image>
          ))}
        </div>

        <div className='flex flex-wrap gap-4 justify-center items-start w-full h-auto'>
          {productFullData.map((product, id) => (
            <Product
              key={id}
              src={product.src}
              alt={product.alt}
              title={product.title}
              brandsrc={product.brandsrc}
              description={product.description}
              price={product.price}
              width={product.width}
              height={product.height}
            />
          ))}
          <div className='mt-[2rem] w-full'>
            <Titles>{secondTitle}</Titles>
          </div>
          {/* PRODUCTO SOLO, SIN PAN POR EJEMPLO */}
          <div
            className='mb-10 w-full h-[120px] flex justify-center  mm:flex
           mm:flex-wrap  mm:h-max gap-10'
          >
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
          {onlyProductData.map((product, id) => (
            <Product
              key={id}
              src={product.src}
              alt={product.alt}
              title={product.title}
              brandsrc={product.brandsrc}
              description={product.description}
              price={product.price}
              width={product.width}
              height={product.height}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

{
  /* <Layout>
  <div className='bg-lightGrey w-full py-topBottom  mm:px-sectionSidesMobile lg:px-sectionSides'>
    <Titles>{title}</Titles>
    <div className='mb-10 w-full h-[120px] flex justify-center gap-10'>
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
    </div>
    <div className='flex flex-wrap gap-4 justify-center items-start w-full h-auto'>
      {productFullData.map((product, id) => (
        <Product
          key={id}
          src={product.src}
          alt={product.alt}
          title={product.title}
          description={product.description}
          price={product.price}
          width={product.width}
          height={product.height}
        />
      ))}
    </div>
  </div>
</Layout> */
}
