async function allBreeds() {
    const data = await fetch('https://dog.ceo/api/breeds/list/all');
    const breeds = await data.json();
    return breeds.message
}

export default allBreeds;
