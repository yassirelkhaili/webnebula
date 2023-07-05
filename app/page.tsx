import Hero from "./partials/hero"
import About from "./partials/about"
import Packages from "./partials/packages"
import Skills from "./partials/skills"
import Process from "./partials/process"
import Contact from "./partials/contact"


export default function Home() { 
  return (
    <main className="dark:bg-[#101522] bg-slate-50">
      <Hero />
      <About />
      <Packages />
      <Skills />
      <Process />
      <Contact />
    </main>
  )
}
