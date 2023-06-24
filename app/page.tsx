import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({subsets: ["latin"], weight: ["400", "700"]})

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
    <main className="min-h-screen bg-white">
    <p className={`${roboto.className} text-red-500`}>
      Hello {people.map(person => person.name + " " + person.age + "\n")}
    </p>
    </main>
  )
}
