import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftArrow from "../Icons/LeftArrow/index";
import RightArrow from "../Icons/RightArrow/index";
import ImageToComps from "../ImageToComps";
import bark from "public/brands/bark.png";
import benidorm from "public/brands/benidorm.png";
import boogys from "public/brands/boogys.png";
import mccain from "public/brands/mccain.png";
import puntadelagua from "public/brands/puntadelagua.png";
import ranchoalto from "public/brands/ranchoalto.png";
import simplot from "public/brands/simplot.png";
import unionganadera from "public/brands/unionganadera.png";

export default function BrandCarousell() {
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
    {
      name: ranchoalto,
      url: "aboutUs",
    },
    {
      name: ranchoalto,
      url: "aboutUs",
    },
    {
      name: ranchoalto,
      url: "aboutUs",
    },
  ];

  const settings = {
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 8,
    arrows: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider className=' w-full h-auto' {...settings}>
        {source.map((image, id) => (
          <ImageToComps
            key={id}
            src={image.name}
            className='w-[100px] h-auto '
          />
        ))}
      </Slider>
    </>
  );
}
