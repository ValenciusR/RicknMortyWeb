import Link from "next/link";

export default function Home(){
    return (
        <main>
            <h2>About Rick and Morty</h2>
            <p>
            Rick and Morty is an animated science fiction sitcom created by Justin Roiland and Dan Harmon. The show premiered on Adult Swim in December 2013 and quickly gained a large following due to its unique blend of dark humor, intricate storytelling, and satirical take on various sci-fi tropes. The series revolves around the adventures of Rick Sanchez, a brilliant but alcoholic and morally ambiguous scientist, and his good-hearted but easily influenced grandson, Morty Smith. Together, they embark on dangerous and bizarre escapades across the multiverse, encountering alien worlds, parallel dimensions, and a host of eccentric characters.
            </p>

            <div className="flex justify-center my-8">
                <Link href="/characters">
                    <button className="btn-primary">View Characters</button>
                </Link>
            </div>

            <h1 className="flex justify-center my-8">Main Characters</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="card space-y-4">
                    <h2 className="flex justify-center">Rick</h2>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Example" className="w-full h-auto object-cover" />
                </div>

                <div className="card space-y-4">
                    <h2 className="flex justify-center">Morty</h2>
                    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Example" className="w-full h-auto object-cover"/>
                </div>
            </div>
        </main>
    )
    
}