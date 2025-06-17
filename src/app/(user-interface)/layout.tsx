import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function UserInterfaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
