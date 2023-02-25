import { Link } from "react-scroll";
import Image from "next/image";
import banner from "public/banner.png";

export default function Banner() {
  return (
    <>
      <div className='relative bg-dark w-full h-[calc(100vh_-_5rem)] mt-20 flex items-center justify-start overflow-hidden'>
        <div className='absolute z-10 flex flex-col justify-center items-start bg-black lg:px-sectionSides m:px-sectionSidesMobile w-full h-full bg-opacity-[0.3]'>
          <h1 className='text-white md:text-7xl  m:text-6xl text-left font-semibold mb-2'>
            PACK EVENTOS
          </h1>
          <h3 className='text-white w-[35vw] font-medium lg:text-3xl md:text-2x1 m:text-xl mb-5 tracking-wide'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h3>

          <Link
            activeClass='active'
            className='w-max font-semibold lg:text-lg lg:px-6 lg:py-2 sm:px-5 sm:py-2 m:px-4 m:py-1 m:text-sm text-white rounded-xl bg-primary hover:bg-primaryHover transition-all tracking-widest cursor-pointer'
            to='contact'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            CONTACTO
          </Link>
        </div>

        <div className='absolute top-0 left-0 h-screen w-screen'>
          <Image src={banner} className='h-full w-full object-cover'></Image>
        </div>
      </div>
    </>
  );
}
