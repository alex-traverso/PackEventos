import Image from "next/image";
import Link from "next/link";

export default function ProductNoPrice({
  src,
  alt,
  width,
  height,
  title,
  href,
}) {
  return (
    <>
      <div className=' mm:w-[250px] h-[220px] md:w-xs rounded-md overflow-hidden hover:scale-[1.02] transition duration-500 cursor-pointer bg-darkGrey hover:bg-primaryHover group'>
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
          <div className='py-4 px-4'>
            <h3 className='text-xl text-center font-semibold text-primary group-hover:text-white'>
              {title}
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
}
