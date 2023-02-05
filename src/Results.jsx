import Pet from "./Pet";

const Results = ({pets}) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No Pets found</h1>
            ) : (
                pets.map((pet) => {
                    return (
                        <Pet 
                            key={pet.id} 
                            name={pet.name} 
                            animal={pet.animal} 
                            breed={pet.breed}
                            location={`${pet.city}, ${pet.state}`}
                            images={pet.images}
                            id={pet.id}
                        />
                    );
                })
            )}
        </div>
    );
};

export default Results;