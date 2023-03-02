export default function Footer() {
  const today = new Date();
  return (
    <>
      <div className='w-full lg:px-sectionSides mm:px-sectionSidesMobile h-[5.5rem] bg-darkGrey p-sectionTop flex justify-center items-center'>
        <div className='w-max'>
          <p className=' text-black text-center dark:text-zinc-300 mm:text-[0.8rem] m:text-[0.9rem]'>
            ©{today.getFullYear()} Pack Eventos. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
