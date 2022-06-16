import { useContext, useEffect, useState } from "react";
import {Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import Context from "../context/Context";
import { allBreeds } from "../API";

import arrayBreeds from "../helper/arrayBreeds";


function DogsBreed(){
   const { setSelectBreed } = useContext(Context);
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
            <FormControl sx={{ m: 3, minWidth: 200 }} size="small" >
                <InputLabel id="select-breed">Breed</InputLabel>
                    <Select 
                        labelId="select-breed" 
                        variant="outlined" 
                        label="Breed" 
                        onChange={ handleClick } 
                        MenuProps={{ PaperProps: { sx: { maxHeight: 550 } } }}
                    >
                            { breeds.map((breed) => {
                                return <MenuItem key={breed} value={breed}>{breed}</MenuItem>
                            })
                            }
                    </Select>
            </FormControl>            
        </header>        
    )
}

export default DogsBreed;
