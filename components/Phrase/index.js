import Image from "next/image";
import phraseBg from "public/bg-frase.png";

export default function Phrase() {
  return (
    <div className='relative h-[400px] w-full flex justify-center items-center'>
      <div className='absolute w-full h-full bg-black/75 z-30 flex justify-center items-center'>
        <h2 className='text-white top-4 font-medium italic w-[60vw] lg:text-left xl:text-2xl mb-2 m:text-center m:text-xl'>
          &quot;Bienvenido a Pack Eventos, una empresa familiar dedicada a la
          distribución de panchos y hamburguesas congelados para el sector
          gastronómico.&quot;
        </h2>
      </div>
      <div className='absolute w-full h-full top-0 left-0'>
        <Image src={phraseBg} fill></Image>
      </div>
    </div>
  );
}
