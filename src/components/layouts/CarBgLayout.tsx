import Image from "next/image";

export default function CarBgLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="select-none flex flex-col md:justify-center gap-1 md:items-start md:flex-row min-h-full flex-1">
      <div className="flex-1">{children}</div>
      <Image
        src="/icons/car-green.svg"
        alt="car-background"
        height={410}
        width={410}
        className="flex-1 z-[5] self-end md:self-center p-1"
      />
      <div className="min-h-[150px] absolute left-0 bottom-0 md:min-h-full bg-[#fef6dd] md:w-1/3 w-full " />
    </div>
  );
}
