import { useContext, useEffect, useState } from "react";
import {Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { styled } from '@mui/material/styles';
import Context from "../context/Context";
import { allBreeds } from "../API";

import arrayBreeds from "../helper/arrayBreeds";

const MuiMenuItem = styled(MenuItem)(({ theme }) => ({
    '& .MuiSvgIcon-root ': {
      marginRight: theme.spacing(1),      
    },
  }));

function DogsBreed(){
   const { setSelectBreed, selectBreed } = useContext(Context);
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
        <header className="absolute">
            <FormControl sx={{ m: 3, minWidth: 200 }} size="small" >
                <InputLabel id="select-breed">Breed</InputLabel>
                    <Select 
                        labelId="select-breed" 
                        variant="outlined" 
                        label="Breed" 
                        onChange={ handleClick } 
                        value={ selectBreed || '' }
                        MenuProps={{ PaperProps: { sx: { maxHeight: 550 } } }} // controlling the selected box options size
                    >
                            { breeds.map((breed) => {
                                return <MuiMenuItem key={breed} value={breed}>
                                            <PetsIcon color="primary" sx={{ mr: '0.3rem'}}/>
                                            {breed}
                                        </MuiMenuItem>
                            })
                            }
                    </Select>
            </FormControl>            
        </header>        
    )
}

export default DogsBreed;
