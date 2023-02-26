import Image from "next/image";

export default function ImageToComps({ src, alt, width, height, className }) {
  return (
    <>
      <Image
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        contain='true'
      />
    </>
  );
}
