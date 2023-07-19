import Hero from "./partials/hero";
import About from "./partials/about";
import Packages from "./partials/packages";
import Skills from "./partials/skills";
import Process from "./partials/process";
import Contact from "./partials/contact";
import Header from "./header";

export default function Home() {
  return (
    <main>
      <Header mainNavitems={true} />
      <Hero />
      <About />
      <Packages />
      <Skills />
      <Process />
      <Contact mainpage={true} />
    </main>
  );
}
