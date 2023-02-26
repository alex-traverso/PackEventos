import Titles from "@/components/Titles";
import Layout from "@/components/Layout";
import Product from "@/components/Product";

export default function ProductsPage() {
  const products = [
    {
      title: "Hamburguesas",
      src: "/productsHome/burger.png",
      description: "lorem ipsum dolor sit amet, consectet",
      price: "$500",
      href: "/productos/hamburguesas",
    },
    {
      title: "Panchos",
      src: "/productsHome/hot dog.png",
      description: "lorem ipsum dolor sit amet, consectet",
      price: "$500",
      href: "/productos/panchos",
    },
    {
      title: "Aderezos",
      src: "/productsHome/dressing.png",
      description: "lorem ipsum dolor sit amet, consectet",
      price: "$500",
      href: "/productos/aderezos",
    },
  ];

  return (
    <Layout>
      <div className='bg-lightGrey py-topBottom m:px-sectionSidesMobile lg:px-sectionSides'>
        <Titles>PRODUCTOS</Titles>
        <div className='w-full flex flex-wrap gap-8 justify-center items-center'>
          {products.map((product, id) => (
            <Product
              key={id}
              src={product.src}
              title={product.title}
              description={product.description}
              price={product.price}
              href={product.href}
              width={100}
              height={100}
              className='object-contain'
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
