import React, { useState } from "react";
import Link from "next/link";
//Iconos
import Menu from "../Icons/Menu/index";
import Close from "../Icons/Close/index";
import Instagram from "../Icons/Instagram/index";
import Facebook from "../Icons/Facebook/index";
import Whatsapp from "../Icons/Whatsapp/index";
//Imagen logo
import Image from "next/image";
import logo from "public/packeventosLogo.png";

const NavBar = () => {
  let Links = [
    { name: "Productos", link: "/productos" },
    { name: "Servicios", link: "/#servicios" },
    { name: "Nosotros", link: "/nosotros" },
    { name: "Contacto", link: "/#contacto" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full h-auto fixed top-0 left-0 z-50'>
      <div className='md:flex h-[80px] items-center justify-between bg-darkGrey py-4 md:px-10 px-7'>
        <div
          className='text-2xl cursor-pointer flex items-center 
      text-gray-800'
        >
          <Link activeClass='active' className='cursor-pointer' href='/'>
            <Image src={logo} alt='Logo' height={50} />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <div>
            {open ? (
              <Close width={30} height={30} stroke='#fff' strokeWidth={2} />
            ) : (
              <Menu
                className=''
                stroke='#fff'
                width={30}
                height={30}
                onClick={() => {
                  setOpen(!open);
                }}
              />
            )}
          </div>
        </div>
        <ul
          className={`font-medium m mm:flex m mm:flex-col m mm:items-end md:flex md:flex-row md:items-center md:pb-0 pb-12 m mm:absolute md:static m mm:bg-lightGrey md:bg-transparent md:z-auto z-[-1] right-0 w-[60%] m mm:h-screen md:h-auto md:w-auto md:pl-0 m mm:pr-10 lg:pr-0  transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-1000px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='m mm:mr-0 md:mr-5 lg:last-of-type:mr-0 lg:text-xl md:text-lg w-max md:my-0 mt-8 tracking-wide cursor-pointer'
            >
              <Link
                href={link.link}
                className='text-white hover:text-primary duration-500'
                scroll={false}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className='md:hidden m mm:flex m mm:gap-5 mt-10'>
            <a
              className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/packeventos_/'
            >
              <Instagram className='m mm:w-[18px] m mm:h-[18px] lg:w-[22px] lg:h-[22px] ' />
            </a>

            <a
              className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'
              target='_blank'
              rel='noreferrer'
              href='https://www.facebook.com/profile.php?id=100063776641832'
            >
              <Facebook className='m mm:w-[18px] m mm:h-[18px] lg:w-[22px] lg:h-[22px] ' />
            </a>

            <a
              className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'
              target='_blank'
              rel='noreferrer'
              href='https://api.whatsapp.com/message/55V766YAUVVWO1?autoload=1&app_absent=0'
            >
              <Whatsapp className='m mm:w-[18px] m mm:h-[18px] lg:w-[22px] lg:h-[22px]' />
            </a>
          </div>
        </ul>
        <div className='m mm:hidden md:flex md:gap-5'>
          <a
            className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/packeventos_/'
          >
            <Instagram className='m mm:w-[18px] m mm:h-[18px] lg:w-[22px] lg:h-[22px]' />
          </a>

          <a
            className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com/profile.php?id=100063776641832'
          >
            <Facebook className='m mm:w-[18px] m mm:h-[18px] lg:w-[22px] lg:h-[22px]' />
          </a>

          <a
            className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'
            target='_blank'
            rel='noreferrer'
            href='https://api.whatsapp.com/message/55V766YAUVVWO1?autoload=1&app_absent=0'
          >
            <Whatsapp className='m mm:w-[18px] m mm:h-[18px] lg:w-[22px] lg:h-[22px]' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
