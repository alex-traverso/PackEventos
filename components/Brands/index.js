import Titles from "../Titles";
import ImageToComps from "../ImageToComps";
import bark from "public/brands/bark.png";
import benidorm from "public/brands/benidorm.png";
import boogys from "public/brands/boogys.png";
import mccain from "public/brands/mccain.png";
import puntadelagua from "public/brands/puntadelagua.png";
import ranchoalto from "public/brands/ranchoalto.png";
import simplot from "public/brands/simplot.png";
import unionganadera from "public/brands/unionganadera.png";

export default function Brands() {
  const source = [
    {
      name: bark,
      url: "/",
    },
    {
      name: benidorm,
      url: "/",
    },
    {
      name: boogys,
      url: "/",
    },
    {
      name: mccain,
      url: "/",
    },
    {
      name: puntadelagua,
      url: "aboutUs",
    },
    {
      name: ranchoalto,
      url: "aboutUs",
    },
    {
      name: simplot,
      url: "/",
    },
    {
      name: unionganadera,
      url: "/",
    },
  ];

  return (
    <div className='py-topBottom m:px-sectionSidesMobile lg:px-sectionSides bg-lightGrey w-full flex flex-col justify-center items-center'>
      <Titles>MARCAS</Titles>
      <p className='text-white text-lg'>
        Las principales marcas con las que trabajamos son
      </p>
      <div className='flex m:flex-wrap mt-8 lg:flex-nowrap m:max-w-xs md:max-w-2xl lg:max-w-4xl justify-center items-center gap-5 cursor-pointer'>
        {source.map((image, id) => (
          <ImageToComps key={id} src={image.name} height={80} />
        ))}
      </div>
    </div>
  );
}
