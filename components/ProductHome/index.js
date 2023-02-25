import Image from "next/image";

export default function ProductHome({ src, alt, width, height }) {
  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} contain />
    </>
  );
}
