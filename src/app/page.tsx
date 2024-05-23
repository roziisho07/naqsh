import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Mission from "@/components/Mission";
import Portifolio from "@/components/Portifolio";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 bg-slate-100 font-sans">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <div className="flex flex-col items-center justify-center">
          <Hero />
          <Mission />
          <Team />
          <Portifolio />
          {/* <Gallery /> */}
        </div>
      </div>
    </main>
  );
}
