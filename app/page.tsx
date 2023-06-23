import Image from 'next/image'

export default function Home() {
  type Person = {
    name : string, 
    age : number
  }
  let people : Person[] = [ 
  {
    name: "Yassir", 
    age : 22
  }
]
  return (
    <main className="min-h-screen bg-white">
    <p className='text-red-500'>
      Hello {people.map(person => person.name + " " + person.age)}
    </p>
    </main>
  )
}
