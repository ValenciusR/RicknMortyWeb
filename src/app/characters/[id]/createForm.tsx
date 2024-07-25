"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

interface CreateCharacterProps {
    id: string
}

export default function CreateCharacter({ id }: CreateCharacterProps){
    const router = useRouter()

    const [location, setLocation] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [characterId, setCharacterId] = useState('')
    const [characterName, setCharacterName] = useState('')
    const [characterStatus, setCharacterStatus] = useState('')
    const [characterSpecies, setCharacterSpecies] = useState('')
    const [characterGender, setCharacterGender] = useState('')
    const [characterImg, setCharacterImg] = useState('')

    useEffect(() => {
        const fetchCharacter = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`http://localhost:4000/characters/${id}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (!response.ok) {
                    throw new Error(`Failed to fetch character data with ID: ${id}`)
                }

                const characterData = await response.json()

                setCharacterId(characterData.id)
                setCharacterName(characterData.name)
                setCharacterStatus(characterData.status)
                setCharacterSpecies(characterData.species)
                setCharacterGender(characterData.gender)
                setCharacterImg(characterData.image)
            } catch (error) {
                console.error('Failed to fetch character data:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchCharacter()
    }, [id])

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        const character = {
            id: characterId,
            name: characterName,
            status: characterStatus,
            species: characterSpecies,
            gender: characterGender,
            location,
            image: characterImg
        }

        try {
            const res = await fetch('http://localhost:4000/characters', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(character)
            })

            if (res.status === 201) {
                router.refresh()
                router.push('/characterByLocation')
            } else {
                throw new Error('Failed to add character')
            }
        } catch (error) {
            console.error('Failed to add character:', error)
        } finally {
            setIsLoading(false)
        }

    }

    return(
        <form onSubmit={handleSubmit} className="w-1/2 bg-opacity-90">
            <label>
                <span>Location :</span>
                <input
                required 
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                />
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            > 
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Character</span>}
            </button>
        </form>
    )
}