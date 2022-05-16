import { useContext, useState, useEffect } from 'react';
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
   }, [URL])
   
    
    return (
        <section>
        { dogsImg.slice(0, 10).map((img) => (
            <img src={img} key={img} alt={ `Many dog's ${URL}`}></img>
        ))}
        </section>
    )
};

export default DogsPicture;
