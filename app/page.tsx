import Hero from "./partials/hero"

export default function Home() {
  type Person = {
    name : string, 
    age : number
  }
  let people : Array<Person> = [ 
  {
    name: "Yassir",   
    age : 22
  }
]
type Name = string
const name : Name = "Yassir"; 
  return (
    <main className="dark:bg-[#101522] bg-slate-50 min-h-screen">
      <Hero />
    </main>
  )
}
