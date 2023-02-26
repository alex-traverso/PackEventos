import Image from "next/image";
import Link from "next/link";

export default function Product({
  src,
  alt,
  width,
  height,
  title,
  description,
  price,
  href,
}) {
  return (
    <>
      <div className='m:max-w-[250px] md:max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-[1.02] transition duration-500 cursor-pointer'>
        <Link href={href}>
          <div className='flex justify-center items-start bg-slate-500'>
            <Image
              src={src}
              alt={alt}
              className=' h-[100px] w-auto object-contain m-5'
              width={width}
              height={height}
            />
          </div>
          <div className='py-4 px-4 bg-white'>
            <h3 className='text-lg font-semibold text-gray-600'>{title}</h3>
            <p>{description}</p>
            <p className='mt-4 text-lg font-thin'>{price}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
{
  /* <div className='w-[200px] h-[250px] hover:bg-darkGrey transition-all'>
  <Image src={src} alt={alt} width={width} height={height}></Image>
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  <div className="">
    <p>{price}</p>
  </div>
</div> */
}
