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
      <div className='m:w-[250px] min-h-[300px] md:w-xs rounded-md overflow-hidden shadow-lg hover:scale-[1.02] transition duration-500 cursor-pointer bg-darkGrey'>
        <Link href={href}>
          <div className='flex justify-center items-start'>
            <Image
              src={src}
              alt={alt}
              className='h-[100px] w-auto object-contain m-5'
              width={width}
              height={height}
            />
          </div>
          <div className='py-4 px-4 '>
            <h3 className='text-lg font-semibold text-primary'>{title}</h3>
            <p className='text-white font-semibold'>{description}</p>
            <div className='px-4 py-1 mt-4 rounded-lg bg-green-700 w-max'>
              <p className=' text-lg font-medium text-white'>{price}</p>
            </div>
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
