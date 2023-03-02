export default function Footer() {
  const today = new Date();
  return (
    <>
      <div className='w-full lg:px-sectionSides m:px-sectionSidesMobile h-[5.5rem] bg-darkGrey p-sectionTop flex justify-center items-center'>
        <div className='w-max'>
          <p className=' text-black dark:text-zinc-300 text-[0.9rem]'>
            ©{today.getFullYear()} Pack Eventos. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
