import { Parallax } from "react-parallax";

export default function Phrase() {
  return (
    <div className='relative h-[400px] w-full flex justify-center items-center'>
      <div className='absolute w-full h-full bg-black/75 z-30 flex flex-col justify-center items-center'>
        <h2 className='text-white text-center top-4 font-medium w-[60vw] lg:text-left xl:text-2xl mb-2  mm:text-center  mm:text-xl'>
          Bienvenido a Pack Eventos, una pyme familiar dedicada a la
          distribución de panchos y hamburguesas congelados para el sector
          gastronómico.
          <br />
          <br />
        </h2>
        <h2 className='text-white text-center top-4 font-medium italic w-[60vw] lg:text-left xl:text-2xl mb-2  mm:text-center  mm:text-xl'>
          &quot;No existe mejor publicidad que un cliente satisfecho.&quot;
        </h2>
      </div>

      <Parallax
        className='min-w-full min-h-full bg-center'
        blur={1}
        bgImage='/bg-frase-2.png'
        bgImageStyle={{
          opacity: ".8",
          objectFit: "cover",
          height: "100vh",
          hidth: "100vw",
        }}
        bgImageAlt='Bienvenido a Pack Eventos'
        strength={300}
      ></Parallax>
    </div>
  );
}
