import Chat from "@/components/Chat";
import Hero from "@/components/Hero";

import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Portifolio from "@/components/Portifolio";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-16 bg-slate-100 font-sans">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
          <div className="flex flex-col items-center justify-center">
            <Hero />
            <Mission />
            <Team />
            <Portifolio />
            <Chat />
          </div>
        </div>
      </main>
    </div>
  );
}
