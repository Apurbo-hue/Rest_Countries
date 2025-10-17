import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    //data fetched
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
     
    //useState for handeling the flags
    const [visitedCountries,setVisitedCountries]=useState([])
    const handleVisitedCountries=(country)=>{
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }
    
    return (
        <>
            <h1>Total countries: {countries.length}</h1>
            <h1>Visited Nations:{visitedCountries.length}</h1>
            <ol>
                <li>{visitedCountries.map(name=> name.name.common)}</li>
            </ol>
            <div className='grid grid-cols-3 gap-4'>
                {countries.map((country) => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)}
            </div>
        </>
    );
};

export default Countries;