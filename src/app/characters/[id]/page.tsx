import CreateCharacter from "./createForm";

export async function getCharacter(id: string){
    const res = await fetch('https://rickandmortyapi.com/api/character/' + id, {
        next: {
            revalidate: 0
        }
    })

    const data = await res.json();
    return data
}

export default async function CharacterDetails({
    params,
}: {
    params: {id: string};
}) {
    const character = await getCharacter(params.id)
    
    return(
        <main>
            <nav>
                <h2>Character Details</h2>
            </nav>
            <div className="card">
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name} className="w-full h-auto object-cover"/>
                <p>Status : {character.status}</p>
                <p>Species : {character.species}</p>
                <p>Type : {character.type}</p>
                <p>Gender : {character.gender}</p>
                <div className="pill">
                    Location : {character.location.name}
                </div>
                <p>Origin : {character.origin.name}</p>
            </div>

            <h2 className="text-primary text-center">Add Character Location</h2>
            <CreateCharacter id={"2"}/>
        </main>
    )
}