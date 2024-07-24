import Link from 'next/link'

export default function Navbar(){
    return (
        <nav>
          <Link href="/"><h1>Rick and Morty WebLink</h1></Link>
          <Link href="/characters">Characters</Link>
          <Link href="/characterByLocation">Characters by Location</Link>
        </nav>
    )
    
}