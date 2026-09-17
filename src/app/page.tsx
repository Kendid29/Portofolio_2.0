import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Skills } from "@/components/sections/Skills";
import { Journey } from "@/components/sections/Journey";
import { Beyond } from "@/components/sections/Beyond";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen">
        <Hero />
        <About />
        <Works />
        <Skills />
        <Journey />
        <Beyond />
        <Contact />
      </main>
    </>
  );
}
