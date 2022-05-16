import { useContext, useState, useEffect } from 'react';
import { PhotoAlbum } from 'react-photo-album';
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

   const images = dogsImg
            .map((imag) => ({ src: imag, width: 200, height:200, alt:`Exemples of ${URL} breed` }))
            .slice(0, 15)
    
    return (
        <section>
           <PhotoAlbum layout='masonry' photos={images} spacing={2} columns={5} />   
        </section>
         
    )
};

export default DogsPicture;
