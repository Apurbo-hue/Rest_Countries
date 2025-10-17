import React, { useState } from 'react';

const Country = ({country}) => {

    const [visited,setVisited] = useState(false)
    const handleVisited=()=>{
         setVisited(visited?false:true)
    }

    return (
        <div className={`${country.name.common==='Israel'?'hidden':'border p-4 m-4'} ${visited?'text-violet-900 bg-gray-950':''}`}>
            <img src={country.flags.flags.png}></img>
            <p>Name: {country.name.common}</p>
            <p>Area: {country.area.area}</p>
            <p>Population: {country.population.population}</p>
            <p>Category: {country.area.area>100000?'Large nation':'Small nation'}</p>
            <button onClick={handleVisited}>{visited?'Visited':'Not visited'}</button>
        </div>
    );
};

export default Country;