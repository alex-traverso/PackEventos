import { useState } from "react";
import Link from "next/link";
import LeftArrow from "../Icons/LeftArrow/index";
import RightArrow from "../Icons/RightArrow/index";
import SlideIcon from "../Icons/SlideIcon/index";
import { archivoBlack } from "@/pages";

export default function Banner() {
  const slides = [
    {
      url: "/banner/banner.png",
    },
    {
      url: "/banner/banner2.png",
    },
    {
      url: "/banner/banner3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const autoPlay = () => {
    setTimeout(() => {
      nextSlide();
    }, 3000);
  };
  autoPlay();

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className='relative w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-start overflow-hidden'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='absolute z-10 flex flex-col justify-center items-start duration-500 bg-cover bg-center lg:px-sectionSides mm:px-sectionSidesMobile w-full h-full bg-opacity-[0.3]'
        >
          {/* Left Arrow */}
          <div className='mm:hidden md:flex justify-center p-2 h-12 w-12 bg-black/50 hover:bg-black transition-all rounded-full absolute top-[50%] -translate-x-0 translate-y-[-50%] left-12 cursor-pointer'>
            <LeftArrow onClick={prevSlide} width='20px' fill='#F2AD25' />
          </div>
          {/* Right Arrow */}
          <div className='mm:hidden md:flex justify-center p-2 h-12 w-12 bg-black/50 hover:bg-black transition-all rounded-full absolute top-[50%] -translate-x-0 translate-y-[-50%] right-12 cursor-pointer'>
            <RightArrow onClick={nextSlide} width='20px' fill='#F2AD25' />
          </div>
          {/* Slides */}
          <h1
            className={`${archivoBlack.className} text-white md:text-7xl drop-shadow-xl mm:text-5xl m:text-6xl text-left font-semibold mb-2`}
          >
            PACK EVENTOS
          </h1>
          <h3 className='text-white uppercase w-[35vw] font-medium lg:text-3xl md:text-2x1 mm:text-xl mb-5 tracking-wide'>
            Distribuidor gastronómico
          </h3>

          <Link
            activeClass='active'
            className='cursor-pointer w-max font-semibold lg:text-lg lg:px-6 lg:py-2 sm:px-5 sm:py-2 mm:px-4 mm:py-1 mm:text-sm text-white bg-primary hover:bg-primaryHover border-lightBlue rounded-lg  transition-all tracking-widest'
            href='/#contacto'
            scroll={false}
          >
            CONTACTO
          </Link>
        </div>
        <div className='absolute bottom-10  flex gap-2 z-10 items-center'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <SlideIcon
                height={8}
                className={` ${
                  currentIndex === slideIndex
                    ? "fill-primary"
                    : "fill-[#9e9e9e]"
                } hover:fill-primary`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
