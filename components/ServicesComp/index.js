import Card from "../Card";
import Titles from "../Titles";

export default function ServicesComp({ id }) {
  const info = [
    {
      src: "/cardsImg/calidad.svg",
      alt: "La mejor calidad",
      title: "La mejor calidad",
      description:
        "Buscamos tener la mejor calidad de productos y servicios para nuestros clientes, brindando la mejor atención",
    },
    {
      src: "/cardsImg/envios.svg",
      alt: "Envíos sin cargo ",
      title: "Envíos sin cargo",
      description: "Envíos refrigerados programados (consultar zona)",
    },
    {
      src: "/cardsImg/pago.svg",
      alt: "Métodos de pago",
      title: "Métodos de pago",
      description:
        "Contamos con formas de pago como: Efectivo, Transferencia bancaria y Mercadopago",
    },
  ];

  return (
    <div
      id={id}
      className='py-topBottom  mm:px-sectionSidesMobile lg:px-sectionSides bg-darkGrey'
    >
      <Titles>SERVICIOS</Titles>
      <div
        className='md:flex md:flex-row md:gap-4 md:justify-center md:items-center
         mm:flex  mm:flex-col  mm:gap-4  mm:justify-center  mm:items-center
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
