import "../globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTS from "@/components/GTS";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />

      <>{children}</>

      <Footer />
      <GTS />
    </div>
  );
}
