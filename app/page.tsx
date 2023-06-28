import Hero from "./partials/hero"
import About from "./partials/about"

export default function Home() { 
  return (
    <main className="dark:bg-[#101522] bg-slate-50 min-h-screen">
      <Hero />
      <About />
    </main>
  )
}
