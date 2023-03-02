export default function Button({ children, onClick, disabled, href, target }) {
  return (
    <>
      <a
        href={href}
        target={target}
        rel='noreferrer'
        className='cursor-pointer w-max font-semibold lg:text-lg lg:px-6 lg:py-2 s mm:px-5 s mm:py-2  mm:px-4  mm:py-1  mm:text-sm text-white bg-primary hover:bg-primaryHover border-lightBlue rounded-lg  transition-all tracking-widest'
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </a>
    </>
  );
}
