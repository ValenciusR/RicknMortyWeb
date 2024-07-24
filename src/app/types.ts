export interface Origin {
    name: string;
  }
  
  export interface Location {
    name: string;
  }
  
  export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    origin: Origin;
    location: Location;
    image: string;
    episode: string[]; // Array of URLs
    url: string;
    created: string; // ISO 8601 format date string
  }