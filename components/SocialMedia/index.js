//Iconos
import Instagram from "../Icons/Instagram/index";
import Facebook from "../Icons/Facebook/index";
import Whatsapp from "../Icons/Whatsapp/index";

export default function SocialMedia() {
  return (
    <>
      <div className='flex flex-col justify-end items-center fixed bottom-0 z-50 lg:left-12 m:left-4 sm:left-8 gap-6 lg:h-2/6 md:h-1/4 m:h-1/5'>
        <div className='bg-darkGrey/60 rounded-full p-[6px]'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/packeventos_/'
          >
            <Instagram
              className='fill-white  hover:fill-primary transition-all shadow-md'
              width={20}
              height={20}
            />
          </a>
        </div>
        <div className='bg-darkGrey/60 rounded-full p-[6px]'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com/profile.php?id=100063776641832'
          >
            <Facebook
              className='stroke-white  hover:stroke-primary transition-all shadow-md'
              width={20}
              height={20}
              strokeWidth={2}
            />
          </a>
        </div>

        <div className='bg-darkGrey/60 rounded-full p-[6px]'>
          <a target='_blank' rel='noreferrer' href='https://www.google.com.ar'>
            <Whatsapp
              className='fill-white  hover:fill-primary transition-all shadow-md'
              width={20}
              height={20}
            />
          </a>
        </div>
        <hr className='h-24 w-0.5 border-0 border-primary bg-primary' />
      </div>
    </>
  );
}
