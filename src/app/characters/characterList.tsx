import Link from "next/link";
import { Character } from "../types";

async function getCharacters(){
    const res = await fetch('https://rickandmortyapi.com/api/character', {
        next: {
            revalidate: 86400
        }
    })

    const data = await res.json();
    const results = data.results;
    return results
}

export default async function CharacterList(){
    const characters = await getCharacters()
    return(
        <>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {characters.map((character : Character) => (
            

                <div key={character.id} className="card my-5">
                    <Link href={`/characters/${character.id}`}>
                        <h3>{character.name}</h3>
                        <img src={character.image} alt={character.name} className="w-full h-auto object-cover"/>
                        <p>Status : {character.status}</p>
                        <p>Species : {character.species}</p>
                        <p>Gender : {character.gender}</p>
                        <div className="pill">
                            Location : {character.location.name}
                        </div>
                    </Link>
                </div>
            
            ))}
        </div>
        </>
    )
}