import CarBgLayout from "@/components/layouts/CarBgLayout";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CarBgLayout>{children}</CarBgLayout>;
}
