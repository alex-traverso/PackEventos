import Titles from "../Titles";

export default function Shipping() {
  return (
    <>
      <div className='w-full lg:px-sectionSides  mm:px-sectionSidesMobile py-topBottom bg-lightGrey md:flex md:justify-center h-auto md:items-center md:self-center md:flex-col  mm:flex  mm:justify-center  mm:items-center  mm:flex-col'>
        <Titles>ENVÍOS</Titles>

        <div className='text-white w-auto xl:w-[600px] md:w-[400px] xs:w-[350px]  mm:w-[300px]'>
          <h4 className='font-medium lg:text-left xl:text-2xl mb-2  mm:text-center  mm:text-xl'>
            Las principales zonas a las que distribuimos son:
          </h4>
          <div className='my-6  mm:text-center lg:text-left'>
            <p className=' mm:text-sm xs:text-base'>
              Escobar, Loma Verde, Matheu, Zelaya, Maschwitz, Maq. Savio, Garín,
              Del Viso, Benavidez, Pacheco.
              <br />
              <br />
              En caso de no residir en alguno de estos lugares consultar por
              privado el envío o punto de encuentro.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
