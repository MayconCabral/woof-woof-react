import { useContext, useState, useEffect } from 'react';
// import { PhotoAlbum } from 'react-photo-album';
import {ImageList, ImageListItem} from '@mui/material';
import Context from '../context/Context';

import { dogImages } from '../API';

function DogsPicture() {
    const { selectBreed } = useContext(Context);
    const [ dogsImg, setDogsImg ] = useState([]);
    const [ fetchOn, setFetchOn ] = useState(false);

    const URL = selectBreed.replace(' ', '/');

    useEffect(() => {
        if (URL && fetchOn) {
            dogImages(URL)
                     .then(images => setDogsImg(images))
        
            setFetchOn(false);
        };  
        setFetchOn(true)
   }, [URL, fetchOn])

//    const images = dogsImg
//             .map((imag) => ({ src: imag, width: 200, height:200, alt:`Exemples of ${URL} breed` }))
//             .slice(0, 15)
// const images = dogsImg
//             .map((img) => (img))
//             .slice(0, 15)
                  
    return (
      <ImageList sx={{ mt: '1%', width: 'auto', height: 900}} cols={3} rowHeight={'auto'}>
        {dogsImg.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={`Exemples of ${URL} breed`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
};

export default DogsPicture;
