export default function Titles({ children }) {
  return (
    <>
      <div className='relative w-full flex justify-center items-center mb-[2.5rem]'>
        <h2 className='text-primary z-10  md:text-4xl sm:text-4xl m:text-3xl font-bold absolute center'>
          {children}
        </h2>
      </div>
    </>
  );
}
