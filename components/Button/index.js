export default function Button({ children, onClick, disabled, href, target }) {
  return (
    <>
      <a
        href={href}
        target={target}
        rel='noreferrer'
        className='cursor-pointer w-max font-semibold lg:text-lg lg:px-6 lg:py-2 sm:px-5 sm:py-2 m:px-4 m:py-1 m:text-sm text-white bg-primary hover:bg-primaryHover border-lightBlue rounded-lg  transition-all tracking-widest'
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </a>
    </>
  );
}
