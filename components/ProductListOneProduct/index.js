import Titles from "../Titles";
import Image from "next/image";
import Layout from "../Layout";
import Product from "../Product";

export default function ProductListOneProduct({
  title,
  brands,
  productFullData,
}) {
  return (
    <Layout>
      <div className='bg-lightGrey w-full py-topBottom  mm:px-sectionSidesMobile lg:px-sectionSides flex flex-col items-center'>
        <Titles>{title}</Titles>

        <div className='mb-10 w-full h-[120px] flex justify-center  mm:flex  mm:flex-wrap  mm:h-max gap-10'>
          {brands.map((brand, id) => (
            <Image
              key={id}
              src={brand.src}
              alt={brand.alt}
              width='100'
              height='100'
              className='object-contain  mm:w-[85px] md:w-[100px]'
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
