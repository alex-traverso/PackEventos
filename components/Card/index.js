export default function Card({ src, alt, title, description }) {
  return (
    <>
      <div className='duration-400 text-white relative flex md:min-h-[286px] mm:w-[280px] md:w-[350px] cursor-pointer flex-col items-center gap-4 rounded-xl border border-lightGrey p-6 shadow-inner transition-all hover:bg-lightestGrey border-zinc-700/40 shadow-zinc-700/40 hover:shadow-transparent'>
        <img className=' mm:h-12 md:h-14' src={src} alt={alt} />
        <h3 className=' font-medium text-xl'>{title}</h3>
        <p className=' text-center'>{description}</p>
      </div>
    </>
  );
}
