export default function Titles({ children }) {
  return (
    <>
      <div className='w-full h-auto flex justify-center items-center mb-[2rem]'>
        <h2 className='text-primary z-10 md:text-4xl sm:text-4xl mm:text-3xl font-bold  center'>
          {children}
        </h2>
      </div>
    </>
  );
}
