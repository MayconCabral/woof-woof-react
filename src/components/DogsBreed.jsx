import { useEffect, useState } from "react";
import allBreeds from "../API/allBreeds";

function DogsBreed(){
    const [breedsObj, setBreedsObj] = useState({}); 
    const [selectBreed, setSelectBreed] = useState('');

    useEffect(() => {
      allBreeds().then((data) => {
          setBreedsObj(data); 
      }) 
      
    }, [])

    const handleClick = ({target}) => {
        setSelectBreed(target.value)
    }

    const breeds = Object.entries(breedsObj);

    return (        
        <header>
            <select onChange={ handleClick }>
                { breeds &&
                breeds.map((breed) => (                    
                    !breed[1].length >= 1
                    ?
                    <option 
                    key={breed[0]} 
                    value={breed[0]}
                    >
                        {breed[0]}
                    </option>
                    :                    
                    breed[1].map((subBreed) => (
                        <option 
                        key={subBreed}
                        value={`${breed[0]}/${subBreed}`}
                        >
                            {`${breed[0]} ${subBreed}`}

                        </option>
                    ))
                ))}
            </select>
        </header>
        
    )
}

export default DogsBreed;
