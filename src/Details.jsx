import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
    const {id} = useParams();
    // if details with id of 1 (for example) isn't in cache, it will call fetchPet
    const results = useQuery(["details", id], fetchPet);
    
    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    };

    const pet = results.data.pets[0];

    return (
        <div className="details">
            <Carousel images={pet.images}></Carousel>
            <div>
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                <button>Adopt {pet.name}</button>
                <p>{pet.description}</p>
            </div>
        </div>
    );
};

export default Details;