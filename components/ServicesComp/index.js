import Card from "../Card";
import Titles from "../Titles";

export default function ServicesComp({ id }) {
  const info = [
    {
      src: "/cardsImg/calidad.svg",
      alt: "La mejor calidad",
      title: "La mejor calidad",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      src: "/cardsImg/envios.svg",
      alt: "Envíos sin costo ",
      title: "Envíos sin costo",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      src: "/cardsImg/envios.svg",
      alt: "Envíos sin costo ",
      title: "Envíos sin costo",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];

  return (
    <div
      id={id}
      className='py-topBottom m:px-sectionSidesMobile lg:px-sectionSides bg-darkGrey'
    >
      <Titles>SERVICIOS</Titles>
      <div
        className='md:flex md:flex-row md:gap-4 md:justify-center md:items-center
        m:flex m:flex-col m:gap-4 m:justify-center m:items-center
         w-full '
      >
        {info.map((info, id) => (
          <Card
            key={id}
            src={info.src}
            alt={info.alt}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>
    </div>
  );
}
