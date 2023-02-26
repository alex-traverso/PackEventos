import React, { useState } from "react";
/* import { Link } from "react-scroll"; */

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
    { name: "Productos", link: "products" },
    { name: "Servicios", link: "services" },
    { name: "Nosotros", link: "aboutUs" },
    { name: "Contacto", link: "contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-darkGrey py-4 md:px-10 px-7'>
        <div
          className='text-2xl cursor-pointer flex items-center 
      text-gray-800'
        >
          <Link
            activeClass='active'
            className='cursor-pointer'
            href='/'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
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
          className={`font-medium m:flex m:flex-col m:items-end md:flex md:flex-row md:items-center md:pb-0 pb-12 m:absolute md:static m:bg-lightGrey md:bg-transparent md:z-auto z-[-1] right-0 w-[60%] m:h-screen md:h-auto md:w-auto md:pl-0 m:pr-10 lg:pr-0  transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-1000px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='m:mr-0 md:mr-5 lg:last-of-type:mr-0 lg:text-xl md:text-lg w-max md:my-0 mt-8 tracking-wide cursor-pointer'
            >
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                href={link.link}
                className='text-white hover:text-primary duration-500'
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className='md:hidden m:flex m:gap-5 mt-10'>
            <div className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/packeventos_/'
              >
                <Instagram className='m:w-[18px] m:h-[18px] lg:w-[22px] lg:h-[22px] ' />
              </a>
            </div>
            <div className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.facebook.com/profile.php?id=100063776641832'
              >
                <Facebook className='m:w-[18px] m:h-[18px] lg:w-[22px] lg:h-[22px] ' />
              </a>
            </div>
            <div className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.google.com.ar'
              >
                <Whatsapp className='m:w-[18px] m:h-[18px] lg:w-[22px] lg:h-[22px]' />
              </a>
            </div>
          </div>
        </ul>
        <div className='m:hidden md:flex md:gap-5'>
          <div className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/packeventos_/'
            >
              <Instagram className='m:w-[18px] m:h-[18px] lg:w-[22px] lg:h-[22px]' />
            </a>
          </div>
          <div className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.facebook.com/profile.php?id=100063776641832'
            >
              <Facebook className='m:w-[18px] m:h-[18px] lg:w-[22px] lg:h-[22px]' />
            </a>
          </div>
          <div className='bg-primary rounded-full p-[6px] hover:bg-primaryHover transition-all'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.google.com.ar'
            >
              <Whatsapp className='m:w-[18px] m:h-[18px] lg:w-[22px] lg:h-[22px] ' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
