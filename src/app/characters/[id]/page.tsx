

async function getCharacter(id: string){
    const res = await fetch('https://rickandmortyapi.com/api/character/' + id, {
        next: {
            revalidate: 60
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
    // const router = useRouter()
    // const [location, setLocation] = useState('')
    // const [isLoading, setIsLoading] = useState(false)
    const character = await getCharacter(params.id)

    // const handleSubmit = async (e)  => {
    //     e.preventDefault()
    //     setIsLoading(true)
    
    //     const newCharacter = { character.name, body, priority, user_email: 'mario@netninja.dev' }
    
    //     const res = await fetch('http://localhost:4000/tickets', {
    //       method: "POST",
    //       headers: {"Content-Type": "application/json"},
    //       body: JSON.stringify(newCharacter)
    //     })
    
    //     if (res.status === 201) {
    //       router.refresh()
    //       router.push('/tickets')
    //     }
        
    //   }
    
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
                <button className="btn-primary">Add Location</button>
            </div>

            <h2 className="text-primary text-center">Add Character Location</h2>
        </main>
    )
}