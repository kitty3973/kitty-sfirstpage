import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Works } from "./components/Works";
import { Values } from "./components/Values";
import { Vision } from "./components/Vision";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-amber-50">
      <Hero />
      <About />
      <Timeline />
      <Works />
      <Values />
      <Vision />
      <Contact />
    </div>
  );
}
