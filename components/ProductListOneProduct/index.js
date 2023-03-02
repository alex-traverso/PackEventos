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
      <div className='bg-lightGrey w-full py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
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
    </Layout>
  );
}
