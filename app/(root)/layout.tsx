import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Header />
        <div className="flex-1 flex items-center justify-center">{children}</div>
        <Toaster />
      <Footer />
    </main>
  );
}
