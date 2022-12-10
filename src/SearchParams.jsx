import { useState, useEffect } from "react";

import Results from "./Results";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    // const [location, setLocation] = useState("");
    const locationHook = useState("");
    const location = locationHook[0];
    const setLocation = locationHook[1];
    
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    useEffect(() => {
        requestPets();
        
    },[]);

    async function requestPets(){
        const res = await fetch(
            `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);
    };

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input type="text" onChange={e => setLocation(e.target.value)} id="location" value={location.toUpperCase()} placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal} onChange={e => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }}>
                        <option></option>
                        {ANIMALS.map(animal => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select disabled={breeds.length === 0} id="breed" value={breed} onChange={e => {
                        setBreed(e.target.value);
                    }}>
                        <option></option>
                        {breeds.map(breed => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
                <Results pets={pets} />
        </div>
    )
}

export default SearchParams;