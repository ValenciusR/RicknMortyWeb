import CharacterListLocation from "./characterListLocation";

export default function CharacterByLocation(){
    return (
        <main>
            <nav>
                <div>
                <h2>Characters</h2>
                <p><small>Current Characters</small></p>
                </div>
            </nav>

            <CharacterListLocation/>
        </main>
    )
}