export default function Footer() {
  const today = new Date();
  return (
    <>
      <div className='lg:px-sectionSides m:px-sectionSidesMobile py-[3.5rem] bg-darkGrey h-14 p-sectionTop flex justify-center items-center'>
        <div className='w-max'>
          <p className=' text-black dark:text-zinc-300 text-[0.9rem]'>
            ©{today.getFullYear()} Pack Eventos. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
