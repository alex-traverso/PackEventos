import Image from "next/image";
import Link from "next/link";

export default function Product({
  src,
  alt,
  width,
  height,
  title,
  description,
  brand,
  price,
}) {
  return (
    <>
      <div className='m:w-[250px] min-h-[300px] md:w-xs rounded-md overflow-hidden shadow-lg hover:scale-[1.02] transition duration-500 cursor-pointer bg-darkGrey'>
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
          <p className='text-white'>{description}</p>
          <p className='text-white font-semibold'>{brand}</p>
          <div className='px-4 py-1 mt-4 rounded-lg bg-green-700 w-max'>
            <p className=' text-lg font-medium text-white'>{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
