import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function DeelvraagLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main className="animate-fade-in">{children}</main>
      <Footer />
    </>
  );
}
