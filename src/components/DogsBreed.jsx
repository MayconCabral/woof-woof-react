import { useContext } from "react";
import WoofWoofContext from "../context/WoofWoofContext";


function DogsBreed(){
   const { setSelectBreed, breedsObj } = useContext(WoofWoofContext);

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
