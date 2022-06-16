import { useContext, useState, useEffect } from 'react';
import {ImageListItem} from '@mui/material';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Context from '../context/Context';

import { dogImages } from '../API';

function DogsPicture() {
    const { selectBreed } = useContext(Context);
    const [ dogsImg, setDogsImg ] = useState([]);
    const [ fetchOn, setFetchOn ] = useState(false);    

    const URL = selectBreed.replace(' ', '/');

    const theme = createTheme({
        breakpoints: {
          values: {
            mobile: 0,
            bigMobile: 350,
            tablet: 650,
            desktop: 900
          }
        }
      });
    
    useEffect(() => {
        if (URL && fetchOn) {
            dogImages(URL)
                     .then(images => setDogsImg(images))
        
            setFetchOn(false);
        };  
        setFetchOn(true)
   }, [URL, fetchOn])
   
                  
    return (
      <ThemeProvider theme={theme}>
            <Box sx={{             
            height: '80vh',
            margin: 5,           
            gap: 0.5,           
            overflowY: 'scroll',                             
            display: "grid",            
            gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            bigMobile: "repeat(1, 1fr)",
            tablet: "repeat(2, 1fr)",
            desktop: "repeat(3, 1fr)"
            }            
        }}>
            {dogsImg.map((item) => (
            <ImageListItem key={item}>
                <img
                src={`${item}?w=164&fit=crop&auto=format`}
                srcSet={`${item}?w=164&fit=crop&auto=format&dpr=2 2x`}
                alt={`Exemples of ${URL} breed`}
                loading="lazy"
                />
            </ImageListItem>
            ))}
        </Box>
      </ThemeProvider>
      
    );
};

export default DogsPicture;
