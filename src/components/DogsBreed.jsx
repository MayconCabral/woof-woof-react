import { useContext, useEffect, useState } from "react";
import WoofWoofContext from "../context/WoofWoofContext";
import allBreeds from "../API/allBreeds";

import arrayBreeds from "../helper/arrayBreeds";


function DogsBreed(){
   const { setSelectBreed } = useContext(WoofWoofContext);
   const [breedsObj, setBreedsObj] = useState({});

   useEffect(() => {
    allBreeds().then((data) => {
        setBreedsObj(data); 
    })         
  }, [])

    const handleClick = ({target}) => {
        setSelectBreed(target.value)
    }

    const breeds = arrayBreeds(breedsObj).sort();
    
    return (        
        <header>
            <select onChange={ handleClick }>
                { breeds.map((breed) => {
                    return <option key={breed} value={breed}>{breed}</option>
                })
                }
            </select>
        </header>
        
    )
}

export default DogsBreed;
