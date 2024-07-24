import { Character } from "../types"

async function getCharactersLocation(){
    const res = await fetch('http://localhost:4000/characters', {
        next: {
            revalidate: 0
        }
    })

    return res.json()
}

export default async function CharacterListLocation(){
    const characters = await getCharactersLocation()

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {characters.map((character : Character) => (
            <>

                <div key={character.id} className="card my-5">
                    <h3>{character.name}</h3>
                    <img src={character.image} alt={character.name} className="w-full h-auto object-cover"/>
                    <p>Status : {character.status}</p>
                    <p>Species : {character.species}</p>
                    <p>Gender : {character.gender}</p>
                    <div className="pill">
                        Location : {character.location.name}
                    </div>
                </div>
            </>
            ))}
        </div>
            
            {characters.length === 0 && (
                <p className="text-center">There are no Characters!</p>
            )}
        </>
    )
}