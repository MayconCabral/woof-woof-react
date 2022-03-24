function arrayBreeds(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    const breeds = values.reduce((acc, cur, i) => {
        if(cur.length >= 1) {
            const result = cur.map((e) => keys[i].concat(' ', e));
           return acc.concat(result)
        } else {
           return acc.concat(keys[i])
        }
    }, [])

    const mix = [...keys, ...breeds];
    const result = [...new Set(mix)]
    
    return result;
}

export default arrayBreeds;
